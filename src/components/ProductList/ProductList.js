import React, { Component } from "react";
import Product from "../Product/Product";
class ProductList extends Component {

  products() {
    const products = this.props.products;
    if (!products.length) {
      return;
    }
    return products.map((product) => {
      return <Product
        key={product.id}
        id={product.id}
        name={product.name}
        handleProductSelected={this.props.handleProductSelected}
      />
    })
  }

  render() {
    return (
      <div>
        { this.products() || <h1>No hay productos</h1> }
      </div>
    )
  }
}

export default ProductList;