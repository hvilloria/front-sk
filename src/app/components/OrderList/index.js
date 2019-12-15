import React, { Component } from 'react';
import { OrderDetail } from '~components';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";
import { getOrders } from '../../services/backSkService';


const OrdersTableContainer = styled.div`
  padding: 1%;
  display: flex;
`

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      orderClicked: false,
      orderSelected: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOrderState = this.handleOrderState.bind(this);
  }

  componentDidMount() {
    getOrders()
      .then((response) => {
        this.setState({
          orders: response.data,
        })
      }).catch((err) => {
        if (err.response.status === 401) {
          this.props.history.push('/login');
        }
      })
  }


  handleOrderState(orderUpdated) {
    let orders = this.state.orders;
    orders.forEach((order, index) => {
      if (order.id === orderUpdated.id) {
        orders[index] = orderUpdated;
        this.setState({ orders })
      }
    })
  }

  handleClick(order) {
    if (this.state.orderClicked) {
      this.setState({orderClicked: !this.state.orderClicked, orderSelected: null})
    } else {
      this.setState({orderClicked: !this.state.orderClicked, orderSelected: order})
    }
  }

  render() {
    const { orderClicked, orderSelected } = this.state;
    let orderDetail = orderClicked ?
      <OrderDetail {...orderSelected} handleOrderState={this.handleOrderState} /> : null;
    let orders = [];
    orders = this.state.orders.map((order) => {
      return (
        <tr
          key={order.id}
          onClick={() => this.handleClick(order)}
          style={{cursor: "pointer"}}
        >
          <td>
            {order.client_name}
          </td>
          <td>
            {order.tracking_id}
          </td>
          <td>
            {order.service_type}
          </td>
          <td>
            {order.payment_type}
          </td>
          <td>
            {order.state}
          </td>
          <td>
            {order.products.map((product, i) => {
              return (
                <li key={i}>{product.name}</li>
              )
            })}
          </td>
          <td>
            {order.created_at}
          </td>
          <td>
            {order.total}
          </td>
        </tr>
      )
     })
    return (
      <OrdersTableContainer>
        <Table hover bordered>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Nro orden</th>
              <th>Retiro</th>
              <th>Pago</th>
              <th>Estado</th>
              <th>Productos</th>
              <th>Fecha</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            { orders }
          </tbody>
        </Table>
        { orderDetail }
      </OrdersTableContainer>
    )
  }
}

export default withRouter(OrderList);