import React from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import  { login }  from '../../../services/authService';
import { useAuth } from "../../../context/auth";

const FormLoginWrapper = styled.div`
  max-width: 40%;
  margin: auto;
  padding: 60px;
`

const Login  = (props) => {
  const { setAuthTokens } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      email: e.target[0].value,
      password: e.target[1].value
    }).then((res) => {
      setAuthTokens(res.headers);
      props.history.push('/admin');
    })
  }

  return (
    <FormLoginWrapper>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formGroupEmail">
          <Form.Control type="email" placeholder="Correo electrónico" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Control type="password" placeholder="Clave" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </FormLoginWrapper>
  )
}

export default withRouter(Login);