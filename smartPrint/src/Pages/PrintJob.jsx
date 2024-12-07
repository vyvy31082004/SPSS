import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import ReusableContainer from '../Components/container';
import Header from '../Components/header';
import { usePrintSettings } from './PageSetting/PrintSettingContext';
import { Modal, Button, ProgressBar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../Components/axios';
import axios from 'axios';

const PrintJob = ({}) => {
    const { printSettings, savePrintSettings } = usePrintSettings();
  const navigate = useNavigate();
  const [selectedFileName, setSelectedFileName] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [selectedFileName, setSelectedFileName] = useState('');
    const [progress, setProgress] = useState(0);
    const [isPrinting, setIsPrinting] = useState(false); // Track if printing is in progress
    const [selectedFile,setselectedFile]=useState({});
    const [currentPages, setCurrentPages] = useState(() => { 
        // Tải số trang hiện có từ Local Storage khi khởi động ứng dụng 
        const savedPages = localStorage.getItem('currentPages'); 
        return savedPages ? parseInt(savedPages, 10) : 100; // Giả sử sinh viên có 100 trang để in
    })
    const [selectedFilePages, setSelectedFilePages] = useState(0); // Số trang của file được chọn

    useEffect(() => {
      // Kiểm tra xem cờ hiệu có tồn tại không
      const isInitialRun = localStorage.getItem('isInitialRun');
      if (!isInitialRun) {
          // Nếu không có, đặt lại số trang và thiết lập cờ hiệu
          localStorage.setItem('currentPages', 60);
          localStorage.setItem('isInitialRun', 'true');
          setCurrentPages(50);
      } else {
          // Nếu có, lấy số trang hiện tại từ Local Storage
          const savedPages = localStorage.getItem('currentPages');
          setCurrentPages(savedPages ? parseInt(savedPages, 10) : 100);
      }
  
      // Lấy file được chọn
      axios.get('http://localhost:5000/files/selected')
          .then((res) => {
              setSelectedFileName(res.data?.fileName || '');
              setselectedFile(res.data);
              setSelectedFilePages(res.data?.pageSize ?? 0); // Giả sử API trả về số trang của file
          })
          .catch(() => {
              setSelectedFileName('');
              setSelectedFilePages(0);
          }); // Nếu không có file được chọn
      }, []);

      useEffect(() => { 
        // Lưu số trang hiện có vào Local Storage khi thay đổi 
        localStorage.setItem('currentPages', currentPages);
    }, [currentPages]);

    
    const currentDate=new Date();
    const [historyData,sethistoryData]=useState({
        printerId: null,
        printerName: null,
        userName: "Phan Thao Vy",
        fileName: null,
        pages: null,
        paperSize: null,
        fileType: null,
        printedAt: currentDate
    });
 
    const handlePrint = async () => {
        try {
          if (selectedFilePages <= currentPages) {
            setCurrentPages(prevPages => prevPages - selectedFilePages);
            alert('Xác nhận in!');
            const getHistoryData = localStorage.getItem('printSettings');
            const parseData = JSON.parse(getHistoryData);
            const updatedHistoryData = { ...historyData, fileName: selectedFile.fileName, 
                pages: selectedFile.pageSize, 
                paperSize: selectedFile.fileSize, 
                fileType: selectedFile.fileType, 
                printerId: parseData.selectedPrinterID, 
                printerName: parseData.selectedPrinterName };
            sethistoryData(updatedHistoryData)
            console.log(updatedHistoryData);
            const response = AxiosInstance.post("api/print-history/add", updatedHistoryData);
            if (response.status===201)
            {console.log("OK")}
            await savePrintSettings();
        //   alert("Cài đặt in đã được lưu thành công!");
          console.log("Settings:", printSettings); // Kiểm tra cài đặt
      
          // Bắt đầu quá trình in
          setProgress(0); // Reset progress trước khi bắt đầu
          setIsPrinting(true); // Đặt trạng thái in là true
          setShowModal(true); // Hiển thị modal
      
          let progressInterval = setInterval(() => {
            setProgress((prevProgress) => {
              if (prevProgress < 100) {
                return prevProgress + 10; // Tăng tiến độ
              } else {
                clearInterval(progressInterval); // Dừng thanh tiến trình khi đạt 100%
                setIsPrinting(false); // Kết thúc trạng thái in
                return prevProgress;
              }
            });
          }, 500); // Tăng tiến độ mỗi 500ms

        } else {
            alert('Không đủ số trang để in!');
        }
          // Lưu cài đặt in
        } catch (error) {
          console.error("Error while saving print settings:", error);
          alert("Có lỗi xảy ra khi lưu cài đặt in.");
        }
      };

      const handleCancel = () => {
        setIsPrinting(false); // Stop printing process
        setProgress(0); // Reset progress
        setShowModal(false); // Close modal
      };
      
    
  return (
    <div style={{gap: '50px '}}>
      <Header />
      <div
        style={{
          padding: '20px',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.8',
          backgroundColor: '#f1f1f1',
          borderRadius: '8px',
          margin: '50px 50px 50px',
          position: 'relative',
        }}
      >
        <h1 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>
          Thông tin việc in
        </h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            background: '#f1f1f1',
            padding: '20px',
          }}
        >
          <div
            style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <strong>Tệp:</strong> {printSettings.selectedFile}
          </div>
          <div
            style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <strong>Máy in được chọn:</strong> {printSettings.selectedPrinterName}
          </div>
          <div
            style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <strong>Phạm vi trang:</strong> {printSettings.pagerange}
          </div>
          <div
            style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <strong>Số bản in:</strong> {printSettings.printcopies}
          </div>
          <div
            style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <strong>Ghép bộ:</strong> {printSettings.printcollate}
          </div>
          <div
            style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <strong>File Page Per Sheet:</strong> {printSettings.papersheet}
          </div>

          <div
            style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <strong>Chế độ màu:</strong> {printSettings.colormode}
          </div>
          <div
            style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <strong>Hướng giấy:</strong> {printSettings.pageorien}
          </div>

          <div
            style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <strong>Kích thước giấy:</strong> {printSettings.pagesize}
          </div>

          <div
            style={{
              padding: '10px',
              background: '#fff',
              borderRadius: '4px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }}
          >
            <strong>Chế độ in:</strong> {printSettings.printmode} trên mỗi tờ giấy
          </div>
          <hr />
        </div>

        {/* Progress bar and buttons */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '50px',
            display: 'flex',
            gap: '10px',
            alignItems: 'flex-end',
          }}
        >
        
          <button
            onClick={handlePrint}
            
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              backgroundColor: '#0B4661',
              color: 'white',
              minWidth: '100px',
            }}
          >
            Đồng ý
          </button>
          <button
            onClick= {()=> navigate(-1)}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              minWidth: '100px',
            }}
          >
            Hủy
          </button>
        </div>

     </div>

      {/* Modal when printing is complete */}
      <Modal show={showModal} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>{isPrinting ? 'Đang in...' : 'Thông Báo'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isPrinting ? (
            <ProgressBar now={progress} label={`${progress}%`} style={{ width: '100%' }} />
          ) : (
            <p>In thành công!</p> // Display success message after print
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

// Xuất component để dùng
export default PrintJob;
