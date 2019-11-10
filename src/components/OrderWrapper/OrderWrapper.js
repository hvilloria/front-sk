import React, { Component } from "react";
import OrderForm from '../OrderForm/OrderForm';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryList from '../CategoryList/CategoryList';
const axios = require('axios');

class OrderWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceType: 'tk',
      total: 0,
      paymentType: 'cash',
      clientName: '',
      clientPhoneNumber: '',
      products: [],
      categories: []
    };
    this.handleClientName = this.handleClientName.bind(this);
    this.handleClientPhoneNumber = this.handleClientPhoneNumber.bind(this);
    this.handleServiceTypeChange = this.handleServiceTypeChange.bind(this);
    this.handlePaymentTypeChange = this.handlePaymentTypeChange.bind(this);
    this.handleTotalChange = this.handleTotalChange.bind(this);
    this.handleVariantSelected = this.handleVariantSelected.bind(this);
    this.handleProductRemover = this.handleProductRemover.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/categories')
      .then(response => {
        this.setState({ categories: response.data })
      })
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

  handleProductRemover(indexOfProduct) {
    let products = this.state.products;
    const remainingProducts = products.filter((_product,i) => {
      return indexOfProduct !== i;
    })
    if (remainingProducts.length) {
      const remainingTotal = remainingProducts.map((product) => {
        return product.variant.price;
      }).reduce((acum, price) => {
        return acum + price;
      })
      this.setState({products: remainingProducts, total: remainingTotal})
    } else {
      this.setState({ products: remainingProducts, total: 0 });
    }
  }

  handleVariantSelected(product, variant) {
    let products = this.state.products;
    products.push({
      id: product.id,
      name: product.name,
      variant: {
        id: variant.id,
        price: variant.price,
        base: variant.base,
        name: variant.name
      }
    });
    this.setState((state) => ({
      products,
      total: state.total += variant.price
  }))
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
              serviceType={this.state.serviceType}
              paymentType={this.state.paymentType}
              categories={this.state.categories}
            />
            <CategoryList
              categories={this.state.categories}
              handleVariantSelected={this.handleVariantSelected}
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
              handleProductRemover={this.handleProductRemover}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default OrderWrapper;
