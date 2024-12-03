import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const navigate=useNavigate();
  return (
    

<div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '20px' }}>

      {/* Login Form */}
      <div className='d-flex justify-content-center'><h1 className='mt-3'>HCMUT Printing System</h1></div>
      <Container className="mt-4" style={{ backgroundColor: '#7895AF', padding: '20px', borderRadius: '8px' }}>
        
        <Row>
            <Col>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label > <strong>Email address</strong></Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> <strong>Password</strong></Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember my password" />
                </Form.Group>

                <Button className="submit" type="submit"  onClick={()=>{navigate('/Home')}}>
                    Submit
                </Button>
                </Form>
            </Col>
            <Col>
                  <img
                      src="src\assets\Printer_machine_at_work-removebg-preview.png"
                      style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                  />
            </Col>
        </Row>
        
        
      </Container>
    </div>
  );
}


export default LoginPage;