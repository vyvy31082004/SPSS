import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
export default function PrintLog ()  {
    const navigate=useNavigate();
    return (
            <div className="d-flex flex-column p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h1>LỊCH SỬ IN</h1>
                    <h4>Phan Thao Vy</h4>
                </div>
                <section className="" style={{backgroundColor: "white", padding: '24px'}}>
                    <div className="d-flex justify-content-between mb-2"> 
                        <h5>Danh sách</h5>
                        <div className='btn btn-secondary'>Gần nhất</div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                    <table class="table">
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
                                <tr>
                                <td>P001</td>
                                <td>Máy in A</td>
                                <td>2024-10-10 13:24:17</td>
                                <td>Phan Thao Vy</td>
                                <td>BTVN</td>
                                <td>10</td>
                                <td>A4</td>
                                <td>PDF</td>
                                </tr>
                                <tr>
                                <td>P002</td>
                                <td>Máy in B</td>
                                <td>2024-09-19 15:24:17</td>
                                <td>Phan Thao Vy</td>
                                <td>BTVN2</td>
                                <td>1</td>
                                <td>A4</td>
                                <td>PDF</td>
                                </tr>
                                <tr>
                                <td>P003</td>
                                <td>Máy in c</td>
                                <td>2024-08-30 07:30:56</td>
                                <td>Phan Thao Vy</td>
                                <td>CNPM</td>
                                <td>2</td>
                                <td>A4</td>
                                <td>PDF</td>
                                </tr>
                            </tbody>
                    </table>
                    </div>
                </section>

            </div>
        

    );
};
