// import React, { useEffect, useState } from 'react';
// import { Button, Container } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import Table from 'react-bootstrap/Table';
// import AxiosInstance from '../Components/axios';
// export default function PrintLog ()  {
    
//     const [histories,setHistory]=useState([]);
//     //api get 
//     useEffect(()=>{
//             AxiosInstance.get(`history/`)
//                 .then(res=>setHistory(res.data))
//                 .catch(err=>console.log(err))
//     })
//     return (
//             <div className="d-flex flex-column p-4">
//                 <div className="d-flex justify-content-between align-items-center mb-2">
//                     <h1>LỊCH SỬ IN</h1>
//                     <h4>Phan Thao Vy</h4>
//                 </div>
//                 <section className="" style={{backgroundColor: "white", padding: '24px'}}>
//                     <div className="d-flex justify-content-between mb-2"> 
//                         <h5>Danh sách</h5>
//                         <div className='btn btn-secondary'>Gần nhất</div>
//                     </div>
//                     <hr />
//                     <div className="d-flex justify-content-between">
//                     <table className="table">
//                             <thead>
//                                 <tr>
//                                 <th scope="col">ID Máy In</th>
//                                 <th scope="col">Tên máy</th>
//                                 <th scope="col">Thời gian</th>
//                                 <th scope="col">Người dùng</th>
//                                 <th scope="col">Tên tệp</th>
//                                 <th scope="col">Số trang</th>
//                                 <th scope="col">Kích thước</th>
//                                 <th scope="col">Loại tệp</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     histories.length>0?(
//                                         histories.map((d, i) => (
//                                             <tr key={i}>
//                                                 <td> {d.ID}</td>
//                                                 <td> {d.Name}</td>
//                                                 <td> {d.Time}</td>
//                                                 <td> {d.user}</td>
//                                                 <td> {d.File}</td>
//                                                 <td> {d.Pages}</td>
//                                                 <td> {d.size}</td>
//                                                 <td> {d.Type}</td>
//                                             </tr>
//                                         ))
                                       
//                                     ):(
//                                         <tr>
//                                             <td>
//                                                 Khong tim thay du lieu
//                                             </td>
//                                         </tr>
//                                     )
//                                 }
//                             </tbody>
//                     </table>
//                     </div>
//                 </section>

//             </div>
        

//     );
// };
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import AxiosInstance from '../Components/axios';

export default function PrintLog ()  {
    const [histories, setHistory] = useState([]);
    const [sortOrder, setSortOrder] = useState('desc'); // Trạng thái sắp xếp

    // API get 
    useEffect(() => {
        AxiosInstance.get(`history/`)
            .then(res => setHistory(res.data))
            .catch(err => console.log(err))
    }, []);

    const sortDataByDate = () => {
        const sortedData = [...histories].sort((a, b) => {
            return sortOrder === 'asc' 
                ? new Date(a.Time) - new Date(b.Time) 
                : new Date(b.Time) - new Date(a.Time);
        });
        setHistory(sortedData);
    };

    const toggleSortOrder = () => {
        setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
        sortDataByDate();
    };

    return (
        <div className="d-flex flex-column p-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h1>LỊCH SỬ IN</h1>
                <h4>Phan Thao Vy</h4>
            </div>
            <section className="" style={{backgroundColor: "white", padding: '24px'}}>
                <div className="d-flex justify-content-between mb-2"> 
                    <h5>Danh sách</h5>
                    <Button className='btn btn-secondary' onClick={toggleSortOrder}>
                        {sortOrder === 'asc' ? 'Gần nhất' : 'Xa nhất'}
                    </Button>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID Máy In</th>
                                <th scope="col">Tên máy</th>
                                <th scope="col">Thời gian</th>
                                <th scope="col">Người dùng</th>
                                <th scope="col">Tên tệp</th>
                                <th scope="col">Số trang</th>
                                <th scope="col">Kích thước</th>
                                <th scope="col">Loại tệp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                histories.length > 0 ? (
                                    histories.map((d, i) => (
                                        <tr key={i}>
                                            <td>{d.ID}</td>
                                            <td>{d.Name}</td>
                                            <td>{d.Time}</td>
                                            <td>{d.user}</td>
                                            <td>{d.File}</td>
                                            <td>{d.Pages}</td>
                                            <td>{d.size}</td>
                                            <td>{d.Type}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="8">Không tìm thấy dữ liệu</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};
