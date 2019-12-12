import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaPrint } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';
import { throwStatement } from "@babel/types";
const axios = require('axios');


const List = styled.li`
 list-style-type:none;
`

const ButtonWrapper = styled.div`
  display:flex;
`
class OrderDetail extends Component {
  constructor() {
    super();
    this.orderRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(orderStatus) {
    axios.patch(`${process.env.REACT_APP_API_URL}/api/orders/${this.props.id}/modify_status`, {
      status: orderStatus
    }).then((response) => {
      this.props.handleOrderState(response.data);
    }).catch((err) => {
      alert(err);
    })
  }


  render() {
    return (
      <div style={{ width: '25rem', margin: '0 1em 0' }}>
        <Card ref={this.orderRef}>
          <Card.Header>{this.props.client_name} | {this.props.tracking_id} </Card.Header>
          <Card.Body>
            <Card.Text>
              <List>Tipo de Servicio: {this.props.service_type}</List>
              <List>tipo de pago: {this.props.payment_type}</List>
            </Card.Text>
            <Card.Text>
              {this.props.products.map((product, i) => {
                return <List key={i}>{product.name} | {product.price}</List>
              })}
            </Card.Text>
            <Card.Text>
              total: {this.props.total}
            </Card.Text>
          </Card.Body>
        </Card>
        <ButtonWrapper>
          <ReactToPrint trigger={() => {
            return (<Button block variant="light">
              <FaPrint />
            </Button>)
          }} content={() => this.orderRef.current} />
          <button
            type="button"
            class="btn btn-light"
            onClick={() => { this.handleClick('finish') }}
          >Finalizar</button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => { this.handleClick('cancel') }}
          >Cancelar</button>
        </ButtonWrapper>
      </div>
    )
  }
}

export default OrderDetail;
