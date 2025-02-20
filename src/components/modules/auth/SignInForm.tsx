import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from 'services/userAuthService';

const SignInForm = ({ layout }: { layout: 'simple' | 'card' | 'split' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await loginUser({ email, password },);
      // Handle successful login (e.g., redirect or show a success message)
      navigate('/'); // Redirect to home or dashboard after successful login
    } catch (err) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <>
      <div className="text-center mb-7">
        <h3 className="text-body-highlight">Sign In</h3>
        <p className="text-body-tertiary">Get access to your account</p>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 text-start">
          <Form.Label htmlFor="email">Email address</Form.Label>
          <div className="form-icon-container">
            <Form.Control
              id="email"
              type="email"
              className="form-icon-input"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faUser} className="text-body fs-9 form-icon" />
          </div>
        </Form.Group>
        <Form.Group className="mb-3 text-start">
          <Form.Label htmlFor="password">Password</Form.Label>
          <div className="form-icon-container">
            <Form.Control
              id="password"
              type="password"
              className="form-icon-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FontAwesomeIcon icon={faKey} className="text-body fs-9 form-icon" />
          </div>
        </Form.Group>
        <Row className="flex-between-center mb-7">
          <Col xs="auto">
            <Form.Check type="checkbox" className="mb-0">
              <Form.Check.Input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                defaultChecked
              />
              <Form.Check.Label htmlFor="remember-me" className="mb-0">
                Remember me
              </Form.Check.Label>
            </Form.Check>
          </Col>
          <Col xs="auto">
            <Link
              to={`/pages/authentication/${layout}/forgot-password`}
              className="fs-9 fw-semibold"
            >
              Forgot Password?
            </Link>
          </Col>
        </Row>
        <Button variant="primary" className="w-100 mb-3" type="submit">
          Sign In
        </Button>
      </Form>
      <div className="text-center">
        <Link
          to={`/pages/authentication/${layout}/sign-up`}
          className="fs-9 fw-bold"
        >
          Create an account
        </Link>
      </div>
    </>
  );
};

export default SignInForm;
