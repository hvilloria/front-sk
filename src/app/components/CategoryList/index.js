import React, { Component, Fragment } from 'react';
import { Category, ProductList } from '~components';
import { Nav } from 'react-bootstrap';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
    this.renderCategories = this.renderCategories.bind(this);
    this.fillProducstList = this.fillProducstList.bind(this);
  };

  fillProducstList(products) {
    this.setState({products: products})
  }

  renderCategories() {
    const categories = this.props.categories;
    return categories.map((category, i) => {
      return <Category
        key={i}
        name={category.name}
        status={category.status}
        activateProductList={this.fillProducstList}
        product={category.products}
      />
    })
  }

  render() {
    return (
      <Fragment>
        <h3>Categorias</h3>
        <Nav justify variant="tabs">
          { this.renderCategories() }
        </Nav>
        <div>
          <ProductList
            products={this.state.products}
            handleVariantSelected={this.props.handleVariantSelected}
          />
        </div>
      </Fragment>
    )
  }
}

export default CategoryList;