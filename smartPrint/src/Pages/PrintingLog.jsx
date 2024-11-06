import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function PrintLog ()  {
    const navigate=useNavigate();
    return (
            <div className="d-flex flex-column p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h1>LỊCH SỬ IN</h1>
                    <div>Phan Thao Vy</div>
                </div>
                <section className="" style={{backgroundColor: "white", padding: '24px'}}>
                    <div className="d-flex justify-content-between mb-2"> 
                        <h5>Danh sách</h5>
                        <div className='btn btn-secondary'>thoat</div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        table
                    </div>
                </section>

            </div>
        

    );
};
