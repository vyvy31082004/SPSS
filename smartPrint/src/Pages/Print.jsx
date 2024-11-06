import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
export default function Print ()  {
    const navigate=useNavigate();
    return (
            <div className="d-flex flex-column p-4">
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <h1>IN</h1>
                    <h4>Phan Thao Vy</h4>
                </div>
                <section className="" style={{backgroundColor: "white", padding: '24px'}}>
                    <div className="d-flex"> 
                        <h5>TỆP</h5>
                    </div>
                    <hr />
                    <div style={{minHeight: '200px'}}>
                    <div className="d-flex justify-content-evenly pt-5" >
                        <div onClick={()=>{navigate('/Print/Upload')}} className="btn btn-primary btn-lg">Chọn tệp</div>
                        <div onClick={()=>{navigate('')}} className="btn btn-primary btn-lg">In</div>
                    </div>
                    </div>
                </section>

            </div>
        

    );
};
