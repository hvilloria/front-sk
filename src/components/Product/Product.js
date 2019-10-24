import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

class Product extends Component {
  constructor(props) {
    super(props);

    this.handleCLick = this.handleCLick.bind(this);
  }

  handleCLick() {
    this.props.handleProductSelected(this.props);
  }

  render() {
    return (
      <ListGroup.Item
      onClick={this.handleCLick}
      >
        {this.props.name}
      </ListGroup.Item>
    )
  }
}

export default Product;