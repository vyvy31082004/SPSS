import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

function HomePage() {
  return (
    <div
      className="homepage"
      style={{
        height: '100vh', // Chiều cao cố định là 100% chiều cao màn hình
        display: 'flex',
        flexDirection: 'column',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Header with Navigation */}
      <Navbar bg="light" expand="lg" style={{ flexShrink: 0, padding: 0 }}>
        <Container>
          <Navbar.Brand href="#home">
            <h2>Smart Printing Service</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Nội dung chính */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Phần Trên */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#4a90e2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <div>
            <h1>Welcome to Smart Printing Service</h1>
            <p>Student Smart Printing Service serves
            students in HCMUT to print their documents!</p>
          </div>
        </div>

        {/* Phần Dưới */}
        <div
          style={{
            flex: 1,
            backgroundColor: '#f8f9fa',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Row style={{ width: '100%', maxWidth: '1200px', textAlign: 'center' }}>
            <Col md={4} className="p-3">
              <h4>Document Printing</h4>
              <p>High-quality printing for all your documents.</p>
            </Col>
            <Col md={4} className="p-3">
              <h4>Convenience</h4>
              <p>Bringing convenience to students at HCMUT.</p>
            </Col>
            <Col md={4} className="p-3">
              <h4>Affordable Prices</h4>
              <p>Students can save a lot of money on printing by using Smart Printing services.</p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HomePage;