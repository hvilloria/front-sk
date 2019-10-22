import React, { Component } from "react";
import CategoryList from '../CategoryList/CategoryList';
import { Button, Col, Form } from 'react-bootstrap';

const axios = require('axios');

class FormOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service_type: '',
      total: '',
      payment_type: '',
      client_name: '',
      client_phone_number: '',
      product_ids: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleServiceTypeChange = this.handleServiceTypeChange.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
    this.handlePaymentTypeChange = this.handlePaymentTypeChange.bind(this);
    this.handleProductSelected = this.handleProductSelected.bind(this);
    this.handleClientName = this.handleClientName.bind(this);
    this.handleClientPhoneNumber = this.handleClientPhoneNumber.bind(this);
  }

  handleServiceTypeChange(event) {
    this.setState({service_type: event.target.value})
  }

  handleTotalChange(event) {
    this.setState({total: event.target.value})
  }

  handlePaymentTypeChange(event) {
    this.setState({payment_type: event.target.value})
  }

  handleClientName(event) {
    this.setState({client_name: event.target.value})
  }

  handleClientPhoneNumber(event) {
    this.setState({client_phone_number: event.target.value})
  }

  handleProductSelected(product_id) {
    let product_ids = this.state.product_ids
    product_ids.push(product_id)
    this.setState({product_ids})
  }

  handleSubmit(event) {
    event.preventDefault();
    const order = this.state;
    axios.post('http:localhost:3001/api/orders', {
      order
    }).then(() => { }).catch((err) => { console.log(err) });
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Tipo de Delivery
            <input
              type='text'
              name='service_type'
              value={this.state.service_type}
              onChange={this.handleServiceTypeChange}
            />
          </label>
          <label>
            Total
            <input
              type='text'
              name='total'
              value={this.state.total}
              onChange={this.handleTotalChange}
            />
          </label>
          <label>
            Tipo de pago
            <input
              type='text'
              name='payment_type'
              value={this.state.payment_type}
              onChange={this.handlePaymentTypeChange}
            />
          </label>
          <label>
            Nombre de Cliente
            <input
              type='text'
              name='client_name'
              value={this.state.client_name}
              onChange={this.handleClientName}
            />
          </label>
          <label>
            Numero Telefonico
            <input
              type='text'
              name='client_phone_number'
              value={this.state.client_phone_number}
              onChange={this.handleClientPhoneNumber}
            />
          </label>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </form>
        <CategoryList
          categories={this.props.categories}
          handleProductSelected={this.handleProductSelected} />
      </div>

    )
  }
}

FormOrder.defaultProps = {
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

export default FormOrder;