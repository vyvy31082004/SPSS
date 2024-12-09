import  { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import users from './usersID.json'

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState('');

  // Retrieve saved data from localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem('savedEmail');
    const savedPassword = localStorage.getItem('savedPassword');

    if (savedEmail) setEmail(savedEmail);
    if (savedPassword) setPassword(savedPassword);
    if (savedEmail || savedPassword) setRemember(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error message

    // Validate the email and password against the imported JSON
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      if (remember) {
        // Save email and password to localStorage
        localStorage.setItem('savedEmail', email);
        localStorage.setItem('savedPassword', password);
      } else {
        // Clear localStorage if not remembered
        localStorage.removeItem('savedEmail');
        localStorage.removeItem('savedPassword');
      }

      // Navigate to Home page
      navigate('/Home');
    } else {
      setError('Invalid email or password.');
    }
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRememberChange = (e) => setRemember(e.target.checked);

  return (
    <div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '20px' }}>
      <div className="d-flex justify-content-center">
        <h1 className="mt-3">HCMUT Printing System</h1>
      </div>
      <Container className="mt-4" style={{ backgroundColor: '#7895AF', padding: '20px', borderRadius: '8px' }}>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label><strong>Email address</strong></Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label><strong>Password</strong></Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Remember my password"
                  checked={remember}
                  onChange={handleRememberChange}
                />
              </Form.Group>

              {error && <p style={{ color: 'red' }}>{error}</p>}

              <Button className="submit" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <img
              src="src/assets/Printer_machine_at_work-removebg-preview.png"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
              alt="Printer"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
