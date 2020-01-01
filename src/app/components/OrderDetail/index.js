import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaPrint } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';
import { updateOrderStatus } from '../../../services/backSkService';

const List = styled.li`
 list-style-type:none;
`
const TextToPrint = styled.h6`
  display: inline;
  font-size: 20px;
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
    updateOrderStatus(this.props.id, {
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
          <Card.Header><TextToPrint>{this.props.client_name}</TextToPrint></Card.Header>
          <Card.Body style={{ maxWidth: "70mm" }}>
            <Card.Text>
              <List>Servicio: <TextToPrint>{this.props.service_type}</TextToPrint></List>
              <List>Pago: <TextToPrint>{this.props.payment_type}</TextToPrint></List>
            </Card.Text>
            <br></br>
            <Card.Text>
              {this.props.products.map((product, i) => {
                return (
                  <>
                    <li key={i}><TextToPrint>{product.name}</TextToPrint></li>
                    <hr></hr>
                  </>
                )
              })}
            </Card.Text>
            <Card.Text>
              notas: <TextToPrint>{this.props.notes}</TextToPrint>
            </Card.Text>
            <Card.Text>
              total: <TextToPrint>{this.props.total}</TextToPrint>
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
