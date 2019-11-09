import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import OrderProduct from "../OrderProduct/OrderProduct";

class Order extends Component {
  constructor(props) {
    super(props);
  }

  products(){
    return this.props.products.map((product, i) => {
      return <OrderProduct key={i} name={product.name} price={product.price}/>
    })
  }

  render() {
    return (
      <div style={{ margin: "5px"}}>
      <Card style={{ width: '18rem' }}>
        <Card.Header>{this.props.client_name} | {this.props.tracking_id} </Card.Header>
        <Card.Body>
          <Card.Text>
            <li>Tipo de Servicio: {this.props.service_type}</li>
            <li>tipo de pago: {this.props.payment_type}</li>
          </Card.Text>
          <Card.Text>
            Productos:
            {this.products()}
          </Card.Text>
          <Card.Text>
            <span>Notas: {this.props.notes}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{this.props.total}</Card.Footer>
      </Card>
      </div>
    )
  }
}

export default Order;
