import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import  { login }  from '../../services/authService';

const FormLoginWrapper = styled.div`
  max-width: 40%;
  margin: auto;
  padding: 60px;
`

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    login({
      email: e.target[0].value,
      password: e.target[1].value
    }).then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <FormLoginWrapper>
        <Form onSubmit={this.handleSubmit}>
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
}

export default withRouter(Login);