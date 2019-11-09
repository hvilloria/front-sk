import React, { Component } from "react";
import Order from "../Order/Order";
import styled from 'styled-components'
const axios = require('axios');

const OrdersContainer = styled.div`
  display: flex;
`
const ListContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  border: ${props => props.withBorder ? "solid" : ''};
  border-width: ${props => props.withBorder ? "0px 1px 0px 0px" : "0px"};
  border-color: ${props => props.withBorder ? "#bdbdbd" : "white"};
`
const ConfirmedOrdersContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  padding: 5px
`
const FinishedOrdersContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  margin-left: 2px;
  padding: 5px;
`
const OrderTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  border: solid;
  border-width: 0px 0px 1px 0px;
  border-color: #bdbdbd;
`

const OrderTitle = styled.h2`
  font-weight:normal;
`

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmedOrders: [],
      finishedOrders: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/orders')
    .then((response) => {
      this.setState({
        confirmedOrders: response.data,
        finishedOrders: response.data
      })
    })
  }

  orders(status) {
    const orders = status === 'confirmed' ? this.state.confirmedOrders : this.state.finishedOrders
    if (orders.length) {
      return orders.map((order, i) => <Order key={i} {...order} />)
    } else {
      return <h1>No hay comandas generadas</h1>
    }
  }

  render() {
    return (
      <OrdersContainer>
        <ListContainer withBorder>
          <OrderTitleContainer>
            <OrderTitle>Ordenes Confirmadas</OrderTitle>
          </OrderTitleContainer>
          <ConfirmedOrdersContainer>
            {this.orders('confirmed')}
          </ConfirmedOrdersContainer>
        </ListContainer>
        <ListContainer>
          <OrderTitleContainer>
            <OrderTitle>Ordenes Finalizadas</OrderTitle>
          </OrderTitleContainer>
          <FinishedOrdersContainer>
            {this.orders('finished')}
          </FinishedOrdersContainer>
        </ListContainer>
      </OrdersContainer>
    )
  }
}

export default OrderList