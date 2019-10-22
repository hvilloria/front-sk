import React, { Component } from 'react';

class Product extends Component {
  constructor(props) {
    super(props);

    this.handleCLick = this.handleCLick.bind(this);
  }

  handleCLick() {
    this.props.handleProductSelected(this.props.id);
  }

  render() {
    return (
      <div>
        <span
          onClick={this.handleCLick}
        >{this.props.name}</span>
      </div>
    )
  }
}

export default Product;