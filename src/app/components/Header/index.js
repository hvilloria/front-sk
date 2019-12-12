import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  font-family: 'Raleway',sans-serif;
  font-weight: 600;
  color: #707070;
  font-size: 25px;
  line-height: 80px;
  margin-right: 70%;
`;

const UserMenu = styled.h5`
  font-family: Lato;
  font-weight: normal;
  font-size: 15px;
  line-height: 82px;
  cursor: pointer;
`;

const HeaderWrapper = styled.header`
  display: flex;
  background-color: #fafafa;
  justify-content: space-around;
  height: 80px;
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleCLick = this.handleCLick.bind(this);
  }

  handleCLick() {
    if (localStorage.getItem("uid") !== null) {
      axios.delete(`${process.env.REACT_APP_API_URL}/auth/sign_out`, {
        headers: {
          'uid': localStorage.getItem('uid'),
          'access-token': localStorage.getItem('access_token'),
          'client': localStorage.getItem('client')
        }
      }).then(() => {
        localStorage.clear();
        this.props.history.push('/login')
      })
    }
  }

  render() {
    let displayName = "login";
    if (localStorage.getItem("uid") !== null) {
      displayName = localStorage.getItem("uid");
    }
    return (
      <HeaderWrapper>
        <Title><Link to="/" style={{ textDecoration: 'none', color: '#707070' }}>Shirokuro</Link></Title>
        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to="/orders" style={{ textDecoration: 'none', color: '#707070' }}>Crear Comanda</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <UserMenu onClick={this.handleCLick}>{displayName}</UserMenu>
      </HeaderWrapper>
    )
  }
}

export default withRouter(Header);
