
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Components/header';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../Components/axios';

const Print = () => {
    const [files, setFiles] = useState([]);
    const [selectedFileName, setSelectedFileName] = useState('');
    const [selectedFile,setselectedFile]=useState({});
    const [currentPages, setCurrentPages] = useState(() => { 
        // Tải số trang hiện có từ Local Storage khi khởi động ứng dụng 
        const savedPages = localStorage.getItem('currentPages'); 
        return savedPages ? parseInt(savedPages, 10) : 100; // Giả sử sinh viên có 100 trang để in
    })
    const [selectedFilePages, setSelectedFilePages] = useState(0); // Số trang của file được chọn

    // useEffect(() => {
    //     // Lấy file được chọn
    //     axios.get('http://localhost:5000/files/selected')
    //       .then((res) => {
    //           setSelectedFileName(res.data?.fileName ||'');
    //           setSelectedFilePages(res.data?.pageSize??0); // Giả sử API trả về số trang của file
    //       })
    //       .catch(() => {
    //           setSelectedFileName('');
    //           setSelectedFilePages(0);
    //       }); // Nếu không có file được chọn
    // }, []);
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
            setCurrentPages(savedPages ? parseInt(savedPages, 10) : 50);
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
     
    const navigate = useNavigate();
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

    // Xử lý in
    const handlePrint = () => {
        if (selectedFilePages <= currentPages) {
            setCurrentPages(prevPages => prevPages - selectedFilePages);
            alert('In thành công!');
            const getHistoryData = localStorage.getItem('printSettings');
            const parseData = JSON.parse(getHistoryData);
            const updatedHistoryData = { ...historyData, fileName: selectedFile.fileName, 
                pages: selectedFile.pageSize, 
                paperSize: selectedFile.fileSize, 
                fileType: selectedFile.fileType, 
                printerId: parseData.selectedPrinterID, 
                printerName: parseData.selectedPrinterName };
            sethistoryData(updatedHistoryData)
            // sethistoryData(predata =>({...predata, fileName: selectedFile.fileName,
            //                                 pages: selectedFile.pageSize,
            //                                 paperSize: selectedFile.fileSize,
            //                                 fileType: selectedFile.fileType,

            // }));
         
            
            // sethistoryData(predata =>({...predata, printerId: parseData.selectedPrinter, 
            //                                 printerName: parseData.selectedPrinterName
            //                             }));
            console.log(updatedHistoryData);
            const response = AxiosInstance.post("api/print-history/add", updatedHistoryData);
            if (response.status===201)
            {console.log("OK")}
        } else {
            alert('Không đủ số trang để in!');
        }
    };
    
    return (
        <div><Header/>
        <div className="d-flex flex-column p-4">
            <section className="" style={{ backgroundColor: "white", padding: '24px' }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h1>IN</h1>
                {/* <h4>Phan Thao Vy</h4> */}
            </div>
            <hr/>
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5>TỆP</h5>
                    <h5>Số trang hiện tại: {currentPages}</h5>
                </div>
                <hr />
                <div style={{ minHeight: '200px' }}>
                    <div className="d-flex justify-content-evenly pt-5">
                        <div onClick={() => { navigate('/Print/Upload') }} className="btn btn-primary btn-lg">Chọn tệp</div>
                        <div>{selectedFileName || 'Chưa có tệp nào được chọn'}</div>
                        <div onClick={handlePrint} className="btn btn-primary btn-lg">In</div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    );
};

export default Print;
