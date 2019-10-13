import React, { Component } from 'react';
import styled from 'styled-components';

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
`;

const HeaderWrapper = styled.header`
  display: flex;
  background-color: #fafafa;
  justify-content: space-around;
  height: 80px;
`;

class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Title>Shirokuro</Title>
        <UserMenu>Usuario 5</UserMenu>
      </HeaderWrapper>
    )
  }
}

export default Header;
