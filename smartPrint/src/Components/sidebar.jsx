import React,{useState} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
export default function Sidebar(props) {
    const navigate=useNavigate();
    const {content}=props;
    return (
        // <Nav defaultActiveKey="/home" className="flex-column">
        //     <Nav.Link href="/home">Active</Nav.Link>
        //     <Nav.Link eventKey="link-1">Link</Nav.Link>
        //     <Nav.Link eventKey="link-2">Link</Nav.Link>
        //     <Nav.Link eventKey="disabled" disabled>
        //         Disabled
        //     </Nav.Link>
        // </Nav>

        <div  className='d-flex'>
            <div className="sidebar">
                <Navbar className="flex-column " style={{ height: '100vh', width: '205px', backgroundColor: '#D9D9D9' }}>
                    <div className='' onClick={()=>{navigate('/Home')}}>
                        <img
                            src= "src\assets\logo.png"// Replace with your image path or URL
                            style={{ width: '100px', height: '100px', marginBottom: '10px' }}
                        />
                        <h5 style={{textAlign: 'center' }}>SPSS</h5>
                    </div>
                    <Nav className="flex-column">
                        <Nav.Item>
                            <Nav.Link className='p-2' onClick={()=>{navigate('/PrintLog')}}>
                            <i className="bi bi-clock-history pe-2"></i>
                                Lịch sử in
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='p-2' onClick={()=>{navigate('/Print')}}>
                                <i className="bi bi-printer-fill pe-2"></i>
                                In
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className='p-2' onClick={()=>{navigate('/')}}>
                                <i class="bi bi-box-arrow-left pe-2"></i>
                                Đăng xuất
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
            </div>
            <Content>
                {content}
            </Content>
            
        </div>
    );
};
Nav.Link = styled.div`
&:hover {
    background-color:#7c94a4 ;
}
`;
const Content = styled.div`
    flex-grow: 1;
`;