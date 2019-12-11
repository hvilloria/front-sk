import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { FaPrint } from 'react-icons/fa';
import ReactToPrint from 'react-to-print';


const List = styled.li`
 list-style-type:none;
`
class OrderDetail extends Component {
  constructor() {
    super();
    this.orderRef = React.createRef();
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
        <ReactToPrint trigger={() => {
          return (<Button block variant="light">
            <FaPrint />
          </Button>)
        } } content={() => this.orderRef.current} />
      </div>
    )
  }
}

export default OrderDetail;
