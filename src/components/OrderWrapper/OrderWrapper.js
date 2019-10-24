import React, { Component } from "react";
import OrderForm from '../OrderForm/OrderForm';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Container, Row, Col } from 'react-bootstrap';

class OrderWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceType: 'tk',
      total: '',
      paymentType: 'cash',
      clientName: '',
      clientPhoneNumber: '',
      products: []
    };
    this.handleClientName = this.handleClientName.bind(this);
    this.handleClientPhoneNumber = this.handleClientPhoneNumber.bind(this);
    this.handleServiceTypeChange = this.handleServiceTypeChange.bind(this);
    this.handlePaymentTypeChange = this.handlePaymentTypeChange.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
    this.handleProductSelected = this.handleProductSelected.bind(this);

  }

  handleClientName(event) {
    this.setState({clientName: event.target.value})
  }

  handleClientPhoneNumber(event) {
    this.setState({clientPhoneNumber: event.target.value})
  }

  handleServiceTypeChange(event) {
    this.setState({serviceType: event.target.value})
  }

  handlePaymentTypeChange(event) {
    this.setState({paymentType: event.target.value})
  }

  handleTotalChange(event) {
    this.setState({total: event.target.value})
  }

  handleProductSelected(product) {
    let products = this.state.products
    products.push({name: product.name, id: product.id});
    this.setState({products})
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={8}>
            <OrderForm
              handleClientName={this.handleClientName}
              handleClientPhoneNumber={this.handleClientPhoneNumber}
              handleServiceTypeChange={this.handleServiceTypeChange}
              handlePaymentTypeChange={this.handlePaymentTypeChange}
              handleTotalChange={this.handleTotalChange}
              handleProductSelected={this.handleProductSelected}
              serviceType={this.state.serviceType}
              paymentType={this.state.paymentType}
              categories={this.props.categories}
            />
          </Col>
          <Col sm={4}>
            <OrderSummary
              clientName={this.state.clientName}
              clientPhoneNumber={this.state.clientPhoneNumber}
              serviceType={this.state.serviceType}
              paymentType={this.state.paymentType}
              total={this.state.total}
              products={this.state.products}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

OrderWrapper.defaultProps = {
  categories: [
    {
        "id": 1,
        "name": "Cobbler",
        "status": "active",
        "products": [
            {
                "id": 1,
                "name": "Salmon",
                "status": "active",
                "variants": []
            },
            {
                "id": 2,
                "name": "Halfbeak",
                "status": "active",
                "variants": []
            },
            {
                "id": 3,
                "name": "Bloody clam",
                "status": "active",
                "variants": []
            },
            {
                "id": 4,
                "name": "Japanese horse mackerel",
                "status": "active",
                "variants": []
            },
            {
                "id": 5,
                "name": "Japanese whiting",
                "status": "active",
                "variants": []
            },
            {
                "id": 6,
                "name": "Greater amberjack",
                "status": "active",
                "variants": []
            },
            {
                "id": 7,
                "name": "Abalone",
                "status": "active",
                "variants": []
            },
            {
                "id": 8,
                "name": "White trevally",
                "status": "active",
                "variants": []
            }
        ]
    },
    {
        "id": 2,
        "name": "Sundae",
        "status": "active",
        "products": [
            {
                "id": 9,
                "name": "Octopus",
                "status": "active",
                "variants": []
            },
            {
                "id": 10,
                "name": "White trevally",
                "status": "active",
                "variants": []
            },
            {
                "id": 11,
                "name": "Dotted gizzard shad",
                "status": "active",
                "variants": []
            },
            {
                "id": 12,
                "name": "Abalone",
                "status": "active",
                "variants": []
            },
            {
                "id": 13,
                "name": "Milt",
                "status": "active",
                "variants": []
            },
            {
                "id": 14,
                "name": "Whitespotted conger",
                "status": "active",
                "variants": []
            },
            {
                "id": 15,
                "name": "Milt",
                "status": "active",
                "variants": []
            },
            {
                "id": 16,
                "name": "Milt",
                "status": "active",
                "variants": []
            },
            {
                "id": 17,
                "name": "Salmon",
                "status": "active",
                "variants": []
            },
            {
                "id": 18,
                "name": "Milt",
                "status": "active",
                "variants": []
            }
        ]
    },
    {
        "id": 3,
        "name": "Brownie",
        "status": "active",
        "products": [
            {
                "id": 19,
                "name": "Alaskan pink shrimp",
                "status": "active",
                "variants": []
            },
            {
                "id": 20,
                "name": "Mirugai clam",
                "status": "active",
                "variants": []
            },
            {
                "id": 21,
                "name": "Squid",
                "status": "active",
                "variants": []
            },
            {
                "id": 22,
                "name": "Octopus",
                "status": "active",
                "variants": []
            },
            {
                "id": 23,
                "name": "Bastard halibut",
                "status": "active",
                "variants": []
            }
        ]
    }
]
}
export default OrderWrapper;