import React, { Component } from "react";
import Product from "../Product/Product";
import { ListGroup } from 'react-bootstrap';
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
      <ListGroup>
        {this.products() || <h3> No hay productos Seleccionados</h3>}
      </ListGroup>
    )
  }
}

export default ProductList;