import React, { Component, Fragment } from "react";
import { Nav } from 'react-bootstrap';

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
        <Nav.Item
          onClick={this.handleClick}
          action="true"
        >
          <Nav.Link>{this.props.name}</Nav.Link>

        </Nav.Item>
      </Fragment>
    )
  }
}

export default Category;