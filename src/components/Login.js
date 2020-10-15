import React from "react";
import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import { useAuth } from "../components/contexts/Auth";

export default function Login() {
  const { user, login, logout } = useAuth();

  if (user) {
    function handleLogout() {
      console.log(user);
      logout();
    }

    return (
      <Button onClick={handleLogout}>Done for the day</Button>
      );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { username, password } = e.target.elements;

    login(username.value);
  }

  

  return (
    <Container className="login-form">
      <div className="login-form">
        <Form className="form" onSubmit={handleSubmit}>
          <h2>Please login</h2>
          <Form.Group>
            <div>
              <Form.Label>Username</Form.Label>
              <Form.Control placeholder="UserName123" name="username"></Form.Control>
              <Form.Label>Password</Form.Label>
              <Form.Control placeholder="p@ssw0rd..." name="password"></Form.Control>
            </div>
            <Button type="submit">Login</Button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
}