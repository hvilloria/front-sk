import React, { Component } from "react";
import { Card, Button, Modal } from 'react-bootstrap';
const axios = require('axios');

class SummaryOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.ProductSummaryList = this.ProductSummaryList.bind(this);
    this.serviceType = this.serviceType.bind(this);
    this.paymentType = this.paymentType.bind(this);
    this.submitOrder = this.submitOrder.bind(this);

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
    }) // TODO: redireccionar a listado de ordenes si es creada, a pantalla de error y falla.
    .then(response => {
      console.log(response.data);
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


export default SummaryOrder;
