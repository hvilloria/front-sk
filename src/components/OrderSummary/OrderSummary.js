import React, { Component } from "react";
import {
  Redirect,
  withRouter
} from "react-router-dom";
import { Card, Button, Modal } from 'react-bootstrap';
const axios = require('axios');

class SummaryOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      exchange: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.ProductSummaryList = this.ProductSummaryList.bind(this);
    this.serviceType = this.serviceType.bind(this);
    this.paymentType = this.paymentType.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);

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

  paymentType() {
    const { paymentType } = this.props;
    if (paymentType === 'cash') {
       return 'Efectivo'
    }
  }

  handleClick() {
    this.setState((state)=>({showModal: !state.showModal}))
  }


  submitOrder() {
    const variant_ids = this.props.products.map((product)=> product.variant.id)
    const {
      clientName,
      clientPhoneNumber,
      serviceType,
      paymentType,
      total
    } = this.props;
    axios.post('http://localhost:3000/api/orders', {
      order: {
        client_name: clientName,
        client_phone_number: clientPhoneNumber,
        service_type: serviceType,
        payment_type: paymentType,
        variant_ids,
        total: total.toFixed(2)
      }
    })
    .then(response => {
      this.props.history.push('/');
    }).catch((err)=> alert(err))
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

  handleChange(event) {
    const payment = event.target.value
    const total = this.props.total;
    this.setState({exchange: (payment - total).toFixed(2)})
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
            Tipo de Pago: { this.paymentType() }
          </Card.Text>
          <Card.Text>
            Productos: { this.ProductSummaryList() }
          </Card.Text>
          <hr />
          <Card.Text>
            Total: {this.props.total.toFixed(2)}
          </Card.Text>
          <Card.Text>
            Paga Con:
            <input type="text" className="form-control" onChange={this.handleChange}/>
          </Card.Text>
          <Card.Text>
            Cambio: {this.state.exchange}
          </Card.Text>
          <Button onClick={this.handleClick} variant="light" size="lg" block>
            Crear orden
          </Button>
          <Modal show={this.state.showModal} size="sm" centered>
              <Modal.Body>Estas seguro de crear esta orden?</Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={this.handleClick}>
                  Cancelar
                </Button>
                <Button variant="light" onClick={this.submitOrder}>
                  Crear orden
                </Button>
              </Modal.Footer>
            </Modal>
        </Card.Body>
      </Card>
    )
  }
}


export default withRouter(SummaryOrder);
