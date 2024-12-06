// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Button, Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// const Print = () =>  {
//     const [files, setFiles] = useState([]);
//     const [selectedFileName, setSelectedFileName] = useState('');
//     useEffect(() => {
//         // Lấy file được chọn
//         axios.get('http://localhost:5000/files/selected')
//           .then((res) => setSelectedFileName(res.data?.fileName || ''))
//           .catch(() => setSelectedFileName('')); // Nếu không có file được chọn
//       }, []);

//     const navigate=useNavigate();
//     //const [currentPages, setCurrentPages] = useState(0);  Trạng thái lưu trữ số trang hiện tại 
//     // API get
//     //  useEffect(() => { 
//     //     AxiosInstance.get(`fileUpload/`) .then(res => 
//     //         { updateCurrentPages(res.data); }) .catch(err => console.log(err)) 
//     // }, []);
//     return (
//             <div className="d-flex flex-column p-4">
//                 <div className="d-flex justify-content-between align-items-center mb-2">
//                     <h1>IN</h1>
//                     <h4>Phan Thao Vy</h4>
//                 </div>
//                 <section className="" style={{backgroundColor: "white", padding: '24px'}}>
//                     <div className="d-flex justify-content-between align-items-center mb-2"> 
//                         <h5>TỆP</h5>
//                         <h5>Số trang hiện tại: </h5>
//                     </div>
//                     <hr />
//                     <div style={{minHeight: '200px'}}>
//                     <div className="d-flex justify-content-evenly pt-5" >
//                         <div onClick={()=>{navigate('/Print/Upload')}} className="btn btn-primary btn-lg">Chọn tệp </div>
//                         <div>{selectedFileName || 'Chưa có tệp nào được chọn'}</div>
//                         <div onClick={()=>{navigate('')}} className="btn btn-primary btn-lg">In</div>
//                     </div>
                   
         
   
//                     </div>
//                 </section>

//             </div>
        

//     );
// };
// export default Print;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Print = () => {
    const [files, setFiles] = useState([]);
    const [selectedFileName, setSelectedFileName] = useState('');
    const [currentPages, setCurrentPages] = useState(() => { 
        // Tải số trang hiện có từ Local Storage khi khởi động ứng dụng 
        const savedPages = localStorage.getItem('currentPages'); 
        return savedPages ? parseInt(savedPages, 10) : 100; // Giả sử sinh viên có 100 trang để in
    })
    const [selectedFilePages, setSelectedFilePages] = useState(0); // Số trang của file được chọn

    useEffect(() => {
        // Lấy file được chọn
        axios.get('http://localhost:5000/files/selected')
          .then((res) => {
              setSelectedFileName(res.data?.fileName ||'');
              setSelectedFilePages(res.data?.pageSize??0); // Giả sử API trả về số trang của file
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

    // Xử lý in
    const handlePrint = () => {
        if (selectedFilePages <= currentPages) {
            setCurrentPages(prevPages => prevPages - selectedFilePages);
            alert('In thành công!');
        } else {
            alert('Không đủ số trang để in!');
        }
    };

    return (
        <div className="d-flex flex-column p-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h1>IN</h1>
                <h4>Phan Thao Vy</h4>
            </div>
            <section className="" style={{ backgroundColor: "white", padding: '24px' }}>
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
    );
};

export default Print;
