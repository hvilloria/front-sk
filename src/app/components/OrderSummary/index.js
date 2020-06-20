import React, { Component } from "react";
import { RemovableProduct } from '~components/';
import { withRouter } from "react-router-dom";
import { Card, Button, Modal } from 'react-bootstrap';
import { createOrder } from '../../../services/backSkService';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class SummaryOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      exchange: 0,
      products: this.props.products,
      distance: false,
    }
    this.handleClickModal = this.handleClickModal.bind(this);
    this.ProductSummaryList = this.ProductSummaryList.bind(this);
    this.serviceType = this.serviceType.bind(this);
    this.paymentType = this.paymentType.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDistance = this.handleChangeDistance.bind(this);
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
    return paymentType === 'cash' ? 'Efectivo' : 'Online'
  }

  handleClickModal() {
    this.setState((state)=>({showModal: !state.showModal}))
  }

  handleChangeDistance(){
    this.setState({distance: !this.state.distance})
  }

  submitOrder() {
    const order_details_attributes = this.props.products.map((product)=> {
      return {
        variant_id: product.variant.id,
        price: product.variant.price
      }
    })
    const {
      clientName,
      clientPhoneNumber,
      serviceType,
      paymentType,
      address,
      total,
      trackingId,
      notes
    } = this.props;
    createOrder({
      order: {
        client_name: clientName,
        client_phone_number: clientPhoneNumber,
        service_type: serviceType,
        payment_type: paymentType,
        address: address,
        tracking_id: trackingId,
        order_details_attributes,
        notes,
        total: total.toFixed(2)
      },
      distance:this.state.distance
    })
    .then(() => {
      this.props.history.push('/admin');
    })
    .catch((err)=> {
      if (err.response.status === 401){
        localStorage.clear();
        this.props.history.push('/login');
        alert('inicia sesión para completar esta acción');
      }else{
        alert(err)
      }
    })
  }

  serviceType() {
    const { serviceType } = this.props;
    if (serviceType === 'tk') {
       return 'Take Away'
    } else {
      return 'Delivery Local'
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
            Dirección: { this.props.address }
          </Card.Text>
          <Card.Text>
            Productos: { this.ProductSummaryList() }
          </Card.Text>
          <Card.Text>
          <FormControlLabel
            control={<Checkbox
                        checked={this.distance}
                        onChange={this.handleChangeDistance} name="3km"
                        color="primary"
                      />
                    }
            label="3km - $100"
          />
          </Card.Text>
          <hr />
          <Card.Text>
            Total: {this.props.total.toFixed(2)} (No está incluido el costo de envío)
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
