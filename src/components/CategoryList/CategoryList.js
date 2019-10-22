import React, { Component, Fragment } from "react";
import Category from "../Category/Category";
import ProductList from "../ProductList/ProductList";

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
        <div style={ {display: 'flex', justifyContent: 'space-around'}}>
          { this.renderCategories() }
        </div>
        <div>
          <ProductList
            products={this.state.products}
            handleProductSelected={this.props.handleProductSelected}
          />
        </div>
      </Fragment>
    )
  }
}

export default CategoryList;