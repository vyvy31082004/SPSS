import React, { useEffect, useState } from 'react';

import AxiosInstance from '../Components/axios';
import Pagination from 'react-bootstrap/Pagination';
import moment from 'moment-timezone';
export default function PrintLog ()  {
    const [histories, setHistory] = useState([]);
    
    const [currentPage, setCurrentPage] = useState(1); // Trạng thái trang hiện tại
    const itemsPerPage = 2; // Số lượng mục trên mỗi trang

    // API get 
    useEffect(() => {
        AxiosInstance.get(`api/print-history/history`)
            .then((res) => {
            console.log(res.data);
            setHistory(res.data.data);
            console.log(histories);
            
        })
            .catch(err => console.log(err))
    }, []);

    

    

    // Tính toán các mục hiển thị dựa trên trang hiện tại
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = histories.slice(indexOfFirstItem, indexOfLastItem);

    // Thay đổi trang hiện tại
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="d-flex flex-column p-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h1>LỊCH SỬ IN</h1>
            </div>
            <section className="" style={{backgroundColor: "white", padding: '24px'}}>
                <div className="d-flex justify-content-between mb-2"> 
                    <h5>Danh sách</h5>
                    
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
                                currentItems.length > 0 ? (
                                    currentItems.map((d, i) => (
                                        <tr key={i}>
                                            <td>{d.printerId}</td>
                                            <td>{d.printerName}</td>
                                            <td>{moment(d.printedAt).tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss')}</td>
                                            <td>{d.userName}</td>
                                            <td>{d.fileName}</td>
                                            <td>{d.pages}</td>
                                            <td>{d.paperSize}</td>
                                            <td>{d.fileType}</td>
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
                <Pagination>
                    <Pagination.First onClick={() => paginate(1)} />
                    <Pagination.Prev onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)} />
                    {[...Array(Math.ceil(histories.length / itemsPerPage)).keys()].map(number => (
                        <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                            {number + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next onClick={() => paginate(currentPage < Math.ceil(histories.length / itemsPerPage) ? currentPage + 1 : currentPage)} />
                    <Pagination.Last onClick={() => paginate(Math.ceil(histories.length / itemsPerPage))} />
                </Pagination>
            </section>
        </div>
    );
};
