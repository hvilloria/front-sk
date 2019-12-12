import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
const axios = require('axios');

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
    axios.post(`${process.env.REACT_APP_API_URL}/auth/sign_in`, {
      email: e.target[0].value,
      password: e.target[1].value
    }).then((response) => {
      localStorage.setItem('access_token', response.headers['access-token'])
      localStorage.setItem('client', response.headers['client'])
      localStorage.setItem('uid', response.headers['uid'])
      this.props.history.push("/")
    })
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