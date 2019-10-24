import React, { Component } from "react";
import { Card } from 'react-bootstrap';

class SummaryOrder extends Component {
  constructor(props) {
    super(props);
    this.ProductSummaryList = this.ProductSummaryList.bind(this);
  }

  ProductSummaryList() {
    if (this.props.products.length) {
      return this.props.products.map((product, i) => {
        return <li key={i}>{product.name}</li>
      })
    } else {
      return <span>sin productos</span>
    }
  }


  // handleSubmit(event) {
  //   event.preventDefault();
  //   const order = this.state;
  //   axios.post('http://localhost:3001//api/orders', {
  //     order
  //   }).then(() => { }).catch((err) => { console.log(err) });
  // }

  render() {
    return (
      <Card style={{ width: '100%', marginTop: '30px' }}>
        <Card.Body>
          <Card.Title style={{textAlign: 'center'}}>Comanda</Card.Title>
          <hr/>
          <Card.Text>
            nombre de cliente: {this.props.clientName}
          </Card.Text>
          <Card.Text>
            Numero de telefono: {this.props.clientPhoneNumber}
          </Card.Text>
          <Card.Text>
            Tipo de Retiro: {this.props.serviceType}
          </Card.Text>
          <Card.Text>
            Tipo de Pago: {this.props.paymentType}
          </Card.Text>
          <Card.Text>
            Productos: { this.ProductSummaryList() }
          </Card.Text>
          <hr />
          <Card.Text>
            Total: {this.props.total}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}


export default SummaryOrder;
