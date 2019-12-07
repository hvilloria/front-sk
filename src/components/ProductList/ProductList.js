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
        {...product}
        handleVariantSelected={this.props.handleVariantSelected}
      />
    })
  }


  render() {
    return (
      <ListGroup>
        <ListGroup.Item>
          { this.products() || <h3> No hay productos Seleccionados</h3> }
        </ListGroup.Item>
      </ListGroup>
    )
  }
}

export default ProductList;