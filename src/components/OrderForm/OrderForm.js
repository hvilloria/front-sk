import React, { Component } from "react";
import { Col, Form } from 'react-bootstrap';

class FormOrder extends Component {

  render() {
    const disableAddress = () => {
      if (this.props.serviceType !== "dl") {
        return true;
      } else {
        return false;
      }
     }

    return (
      <div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formClientName">
              <Form.Label>Nombre de Cliente</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de Cliente"
                onChange={this.props.handleClientName}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formCLientPhoneNumber">
              <Form.Label>Numero de telefono</Form.Label>
              <Form.Control
                type="text"
                placeholder="Numero de Telefono"
                onChange={this.props.handleClientPhoneNumber}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formServiceType">
              <Form.Label>Tipo de Retiro</Form.Label>
              <Form.Control
                as="select"
                onChange={this.props.handleServiceTypeChange}
                value={this.props.serviceType}
              >
                <option value="tk">Take Away</option>
                <option value="dl">Delivery Local</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} controlId="formPaymentType">
              <Form.Label>Tipo de Pago</Form.Label>
              <Form.Control
                as="select"
                onChange={this.props.handlePaymentTypeChange}
                value={this.props.payment_type}
              >
                <option value="cash">Efectivo</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            {/* // TODO: una vez implementado en el back los parametros, descomentar esto. */}
            {/* <Form.Group as={Col} controlId="address">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Dirección"
                disabled={disableAddress()}
                onChange={this.props.handleAddressChange}
                value={this.props.address}
              />
            </Form.Group> */}
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="Notes">
              <Form.Label>Notas</Form.Label>
              <Form.Control
                type="text"
                placeholder="Notas"
                onChange={this.props.handleNotesChange}
                value={this.props.notes}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </div>

    )
  }
}

export default FormOrder;