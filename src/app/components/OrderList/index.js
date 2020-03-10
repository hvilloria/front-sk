import React, { Component } from 'react';
import { OrderDetail } from '~components';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import styles from './orderList.module.scss';
import { withRouter } from "react-router-dom";
import { getOrders, getSells } from '../../../services/backSkService';


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
      orderSelected: null,
      onlineAmount: 0,
      cashAmount: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOrderState = this.handleOrderState.bind(this);
  }

  componentDidMount() {
    Promise.all([getOrders(), getSells()])
    .then( values => {
      this.setState({
        orders: values[0].data,
        onlineAmount: values[1].data.online,
        cashAmount: values[1].data.cash,
      })
    }).catch( err => {
      if (err.response.status === 401) {
        localStorage.clear();
        this.props.history.push('/login');
        alert('inicia sesión para completar esta acción');
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
            {order.client_phone_number}
          </td>
          <td>
            {order.total}
          </td>
        </tr>
      )
     })
    return (
      <>
        <OrdersTableContainer>
          <Table hover bordered>
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Nro orden</th>
                <th>Retiro</th>
                <th>Pago</th>
                <th>Productos</th>
                <th>Fecha</th>
                <th>Teléfono</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              { orders }
            </tbody>
          </Table>
          { orderDetail }
        </OrdersTableContainer>
        <div className={styles.StatsContainer}>
          <div className={styles.statBox}>
            <div className={styles.statBoxHeader}>
              <h2 className={styles.statHeaderTitle}>Ventas Online</h2>
            </div>
            <p className={styles.statValue}>${this.state.onlineAmount}</p>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statBoxHeader}>
              <h2 className={styles.statHeaderTitle}>Ventas Efectivo</h2>
            </div>
            <p className={styles.statValue}>${this.state.cashAmount}</p>
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(OrderList);