import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PrintPropertiesPage from './Properties/PrintPropertiesPage';
import PrinterList from './SelectPrinter/PrinterSection';

const  FileUploader = () => {
  const navigate = useNavigate();

  // State
  const [files, setFiles] = useState([]); // Danh sách tệp từ backend
  const [selectedFileName, setSelectedFileName] = useState('');
  const [show, setShow] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);


// Load danh sách tệp từ backend khi component mount//

  useEffect(() => {
    axios
      .get('http://localhost:5000/files') // API backend để lấy danh sách file
      .then((res) => setFiles(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Đóng/mở modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseSecondModal = () => setShowSecondModal(false);
  const handleShowSecondModal = () => setShowSecondModal(true);

  // Xử lý tải tệp lên
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    axios
      .post('http://localhost:5000/upload', formData) // API upload file
      .then((res) => {
        setFiles([...files, res.data.file]); // Cập nhật danh sách tệp
        alert('Tải file thành công!');
      })
      .catch((err) => console.error(err));
  };

//Xử lý chọn file
const handleSelectFile = (fileId, fileName) => {
  axios.post(`http://localhost:5000/files/${fileId}/select`)
    .then(() => setSelectedFileName(fileName))
    .catch((err) => console.error(err));
};

  return (
    <div className="d-flex flex-column p-4">
      
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1>CHỌN TỆP</h1>
        <h4>Phan Thảo Vy</h4>
      </div>
      <section style={{ backgroundColor: 'white', padding: '24px' }}>
        <div className="d-flex justify-content-between mb-2">
          <h5>Danh sách tệp đã tải lên</h5>
          {/* Upload File Button */}
          <input type="file" onChange={handleFileUpload} style={{ display: 'none' }} id="file-upload" />
          <label htmlFor="file-upload" className="btn btn-secondary">
            <i className="bi bi-cloud-arrow-up pe-2"></i>
            Tải tệp
          </label>
          <button className="btn btn-secondary">Gần nhất</button>
        </div>
        <hr />

        {/* Danh sách tệp */}
        <div className="d-flex justify-content-between">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Tên tệp</th>
                <th scope="col">Số trang</th>
                <th scope="col">Kích thước</th>
                <th scope="col">Loại tệp</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file) => (
                <tr key={file.id}
                style={{ cursor: 'pointer' }}
                onClick={() => handleFileClick(file.fileName)}>
                  <td>{file.fileName}</td>
                  <td>{file.pageSize}</td> {/* Giá trị giả lập */}
                  <td>{(file.fileSize / 1024).toFixed(2)} KB</td>
                  <td>{file.fileType}</td>
                  <td>
                  <button
                  style={{
                    backgroundColor: file.isSelected ? 'green' : 'blue',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleSelectFile(file._id, file.fileName)}
                >
                  {file.isSelected ? 'Đã chọn' : 'Chọn'}
                </button>
              </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Nút Tiếp Theo */}
      <div className="d-flex justify-content-end mb-2">
        <button onClick={handleShow} className="btn btn-secondary">
          Tiếp theo
        </button>

        {/* Modal 1 */}
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Thuộc tính</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PrintPropertiesPage />
          </Modal.Body>
          <Modal.Footer>
            <Button className="Close" onClick={handleClose}>
              Đóng
            </Button>
            <Button onClick={() => { handleClose(); handleShowSecondModal(); }} className="Next">
              Tiếp theo
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal 2 */}
        <Modal show={showSecondModal} onHide={handleCloseSecondModal} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Chọn máy in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PrinterList />
          </Modal.Body>
          <Modal.Footer>
            <Button className="Close" onClick={handleCloseSecondModal}>
              Đóng
            </Button>
            <Button className="Next">Tiếp theo</Button>
          </Modal.Footer>
        </Modal>

        {/* Nút Trở về */}
        <button onClick={() => navigate('/Print')} className="btn btn-secondary">
          Trở về
        </button>
      </div>
    </div>
  );
}

export default FileUploader;