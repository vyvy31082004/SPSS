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

// Mongoose Schema
const fileSchema = new mongoose.Schema({
  fileName: String,
  fileSize: Number,
  fileType: String,
  pageSize: Number, // Thay đổi kiểu dữ liệu thành Number
  uploadDate: { type: Date, default: Date.now },
  filePath: String,
  isSelected: { type: Boolean, default: false },
});

const File = mongoose.model('File', fileSchema);

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
   // Đặt tất cả file isSelected = false
   await File.updateMany({}, { $set: { isSelected: false } });

   // Đặt isSelected = true đã chọn
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

// Server chạy tại cổng 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});