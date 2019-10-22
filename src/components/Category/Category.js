import React, { Component, Fragment } from "react";

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
    this.props.activateProductList(this.props.product)
  }

  render() {
    return (
      <Fragment>
        <li onClick={this.handleClick}>Category: {this.props.name}</li>
      </Fragment>
    )
  }
}

export default Category;