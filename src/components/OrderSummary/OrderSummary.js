import React, { Component } from "react";
import {
  withRouter
} from "react-router-dom";
import { Card, Button, Modal } from 'react-bootstrap';
import RemovableProduct from "../RemovableProduct/RemovableProduct";
const axios = require('axios');

class SummaryOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      exchange: 0,
      products: this.props.products
    }
    this.handleClickModal = this.handleClickModal.bind(this);
    this.ProductSummaryList = this.ProductSummaryList.bind(this);
    this.serviceType = this.serviceType.bind(this);
    this.paymentType = this.paymentType.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  ProductSummaryList() {
    if (this.props.products.length) {
      return this.props.products.map((product, i) => {
        return (
          <RemovableProduct
            key={i}
            {...product}
            handleProductRemover={this.props.handleProductRemover}
            indexOfProduct={i}
          />
        )
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

  handleClickModal() {
    this.setState((state)=>({showModal: !state.showModal}))
  }

  submitOrder() {
    const variant_ids = this.props.products.map((product)=> product.variant.id)
    const {
      clientName,
      clientPhoneNumber,
      serviceType,
      paymentType,
      total,
      trackingId,
      notes
    } = this.props;
    axios.post('http://localhost:3000/api/orders', {
      order: {
        client_name: clientName,
        client_phone_number: clientPhoneNumber,
        service_type: serviceType,
        payment_type: paymentType,
        tracking_id: trackingId,
        variant_ids,
        notes,
        total: total.toFixed(2)
      }
    })
    .then(() => {
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
          <Button onClick={this.handleClickModal} variant="light" size="lg" block>
            Crear orden
          </Button>
          <Modal show={this.state.showModal} size="sm" centered>
              <Modal.Body>Estas seguro de crear esta orden?</Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={this.handleClickModal}>
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
