import React, { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Form, Card, Alert } from "react-bootstrap";
import AuthProvider, { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import Icons from "./Icons";
import "./landingPageStyle.css";

export default function Login() {
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (currentUser) history.push("/feed");
  });

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/feed");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <AuthProvider>
      <div className="LoginWrapper">
        <Icons></Icons>
        <Container className="d-flex align-items-center justify-content-center">
          <div className="Wrapper w-100">
            <Card className="p-4">
              <h2 className="text-center mb-4">Log in</h2>
              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    required
                  ></Form.Control>
                </Form.Group>

                <Form.Group>
                  <button
                    className="w-100 btn btn-dark"
                    disabled={loading}
                    type="submit"
                  >
                    Log In
                  </button>
                </Form.Group>
              </Form>
            </Card>

            <div className="w-100 text-center mt-2">
              Don't have an account? <Link to="/register">Register</Link>
            </div>
          </div>
        </Container>
      </div>
    </AuthProvider>
  );
}
