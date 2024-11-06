import React,{useState} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Sidebar() {
    return (
        // <Nav defaultActiveKey="/home" className="flex-column">
        //     <Nav.Link href="/home">Active</Nav.Link>
        //     <Nav.Link eventKey="link-1">Link</Nav.Link>
        //     <Nav.Link eventKey="link-2">Link</Nav.Link>
        //     <Nav.Link eventKey="disabled" disabled>
        //         Disabled
        //     </Nav.Link>
        // </Nav>
        <div style={{ display: 'flex' }}>
            <div className="sidebar">
                <Navbar className="flex-column " style={{ height: '100vh', width: '200px', backgroundColor: '#D9D9D9' }}>
                <img
                            src= "src\assets\logo.png"// Replace with your image path or URL
                            style={{ width: '100px', height: '100px', marginBottom: '10px' }}
                        />
                        <h5 style={{textAlign: 'center' }}> Danh sách</h5>
                    <Nav className="flex-column">
                        <Nav.Link href="#PrintingLog">Lịch sử in</Nav.Link>
                        <Nav.Link href="#Print">In</Nav.Link>
            
                    </Nav>
                </Navbar>
            </div>
            <Container className="In" style={{ marginLeft: '250px', padding: '20px' }}>
                <div className="In">IN</div>
                <div className="Overlay">
                    <div className="Tệp"> TỆP </div>
                    <div className="board_selectfile">
                        <div className="selectFile">Chọn tệp</div>
                    </div>
                    <div className="board_print">
                            <div className="printletter">In</div>
                    </div>
                </div>

            </Container>
        
        </div>
    );
};