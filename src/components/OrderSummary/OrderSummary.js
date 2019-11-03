import React, { Component } from "react";
import { Card } from 'react-bootstrap';

class SummaryOrder extends Component {
  constructor(props) {
    super(props);
    this.ProductSummaryList = this.ProductSummaryList.bind(this);
    this.serviceType = this.serviceType.bind(this);
  }

  ProductSummaryList() {
    if (this.props.products.length) {
      return this.props.products.map((product, i) => {
        return <li key={i}>{product.name} {product.variant.name} {product.variant.price}</li>
      })
    } else {
      return <span>sin productos</span>
    }
  }

  serviceType() {
    const { serviceType } = this.props;
    if (serviceType === 'tk') {
       return 'Take Away'
    } else if (serviceType === 'dl') {
      return 'Delivery Local'
    } else {
      return 'Pedidos Ya'
    }
  }

  render() {
    return (
      <Card style={{ width: '100%', marginTop: '30px' }}>
        <Card.Body>
          <Card.Title style={{textAlign: 'center'}}>Comanda</Card.Title>
          <hr/>
          <Card.Text>
            nombre de cliente: { this.props.clientName }
          </Card.Text>
          <Card.Text>
            Numero de telefono: { this.props.clientPhoneNumber }
          </Card.Text>
          <Card.Text>
            Tipo de Retiro: { this.serviceType() }
          </Card.Text>
          <Card.Text>
            Tipo de Pago: { this.props.paymentType }
          </Card.Text>
          <Card.Text>
            Productos: { this.ProductSummaryList() }
          </Card.Text>
          <hr />
          <Card.Text>
            Total: {this.props.total.toFixed(2)}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}


export default SummaryOrder;
