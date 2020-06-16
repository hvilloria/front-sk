import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaPrint } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';
import moment from 'moment';

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
  }

  render() {
    console.log(this.props);
    return (
      <div style={{ width: '25rem', margin: '10% auto' }}>
        <Card ref={this.orderRef}>
          <Card.Header><TextToPrint>{this.props.client_name}</TextToPrint></Card.Header>
          <Card.Body style={{ maxWidth: "70mm" }}>
            <Card.Text>
              <List>Fecha: <TextToPrint>{moment(this.props.created_at).format('DD / MM / YYYY')}</TextToPrint></List>
              <List>Servicio: <TextToPrint>{this.props.service_type}</TextToPrint></List>
              <List>Pago: <TextToPrint>{this.props.payment_type}</TextToPrint></List>
              <List>telefono: <TextToPrint>{this.props.client_phone_number}</TextToPrint></List>
            </Card.Text>
            <Card.Text>
              dirección: <TextToPrint>{this.props.address || 'no aplica'} </TextToPrint>
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
        </ButtonWrapper>
      </div>
    )
  }
}

export default OrderDetail;
