const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Kết nối MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/fileuploads', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Mongoose Schema cho file
const fileSchema = new mongoose.Schema({
  fileName: String,
  fileSize: Number,
  fileType: String,
  pageSize: Number, // Số trang
  uploadDate: { type: Date, default: Date.now },
  filePath: String,
  isSelected: { type: Boolean, default: false },
});
const File = mongoose.model('File', fileSchema);

// Mongoose Schema cho máy in
const printerSchema = new mongoose.Schema({
  id: String,
  name: String,   // Tên máy in
  status: String, // Trạng thái
  location: String, // Địa điểm
  isSelected: { type: Boolean, default: false }, // Máy in được chọn
});

// Tạo model Printer
const Printer = mongoose.model('Printer', printerSchema);

const printers = [
  { id: "P01",name: "Máy in A", status: "Sẵn sàng", location: "B4", isSelected: false },
  { id: "P02",name: "Máy in B", status: "Chưa sẵn sàng", location: "A4", isSelected: false },
  { id: "P03",name: "Máy in C", status: "Sẵn sàng", location: "A5", isSelected: false },
  { id: "P04",name: "Máy in D", status: "Chưa sẵn sàng", location: "H6", isSelected: false },
];

// Thêm dữ liệu vào MongoDB
const seedPrinters = async () => {
  try {
    const printerCount = await Printer.countDocuments();
    if (printerCount > 0) {
      console.log("Printers already exist in the database. Skipping seeding.");
      return;
    }
    await Printer.insertMany(printers);
    console.log("Printers inserted successfully!");
  } catch (error) {
    console.error("Error inserting printers: " + error.message);
  }
};

seedPrinters();


// Multer cấu hình lưu file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Hàm lấy số trang PDF
async function getPdfPageCount(filePath) {
  const pdfBuffer = fs.readFileSync(filePath);
  const pdfDoc = await PDFDocument.load(pdfBuffer);
  return pdfDoc.getPageCount();
}

// API tải file lên
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded!' });
    }

    let pageCount = 0;
    if (file.mimetype === 'application/pdf') {
      pageCount = await getPdfPageCount(file.path); // Lấy số trang nếu là file PDF
    }

    const newFile = new File({
      fileName: file.originalname,
      fileSize: file.size,
      fileType: file.mimetype,
      pageSize: pageCount, // Lưu số trang vào database
      filePath: file.path,
    });

    await newFile.save();
    res.status(201).json({ message: 'File uploaded successfully!', file: newFile });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading file!', error });
  }
});

// API lấy danh sách file
app.get('/files', async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching files!', error });
  }
});

// API chọn file
app.post('/files/:id/select', async (req, res) => {
  try {
    const fileId = req.params.id;
    await File.updateMany({}, { $set: { isSelected: false } });

    const selectedFile = await File.findByIdAndUpdate(
      fileId,
      { isSelected: true },
      { new: true }
    );

    if (!selectedFile) {
      return res.status(404).json({ message: 'File not found!' });
    }

    res.json({ message: 'File selected successfully!', selectedFile });
  } catch (error) {
    res.status(500).json({ message: 'Error selecting file!', error });
  }
});

// API lấy file được chọn
app.get('/files/selected', async (req, res) => {
  try {
    const selectedFile = await File.findOne({ isSelected: true });
    if (!selectedFile) {
      return res.status(404).json({ message: 'No file selected!' });
    }
    res.json(selectedFile);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching selected file!', error });
  }
});

// API lấy danh sách máy in
app.get('/printers', async (req, res) => {
  try {
    const printers = await Printer.find();
    res.json(printers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching printers!', error });
  }
});

// API chọn máy in
app.post('/printers/:id/select', async (req, res) => {
  try {
    const printerId = req.params.id;

    // Đặt tất cả máy in isSelected = false
    await Printer.updateMany({}, { $set: { isSelected: false } });

    // Đặt isSelected = true cho máy in được chọn
    const selectedPrinter = await Printer.findByIdAndUpdate(
      printerId,
      { isSelected: true },
      { new: true }
    );

    if (!selectedPrinter) {
      return res.status(404).json({ message: 'Printer not found!' });
    }

    res.json({ message: 'Printer selected successfully!', selectedPrinter });
  } catch (error) {
    res.status(500).json({ message: 'Error selecting printer!', error });
  }
});

// API lấy máy in được chọn
app.get('/printers/selected', async (req, res) => {
  try {
    const selectedPrinter = await Printer.findOne({ isSelected: true });
    if (!selectedPrinter) {
      return res.status(404).json({ message: 'No printer selected!' });
    }
    res.json(selectedPrinter);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching selected printer!', error });
  }
});

// Server chạy tại cổng 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
