import React, { Component } from "react";
import {Button} from 'react-bootstrap';

class Variant extends Component {
  constructor(props) {
    super(props);
    this.handleVariantClick = this.handleVariantClick.bind(this);
  }

  handleVariantClick() {
    this.props.handleVariantClick(this.props)
  }

  render() {
    return (
      <Button
        variant="light"
        onClick={this.handleVariantClick}
      >{this.props.name || "Agregar"}</Button>
    )
  }
}

export default Variant;
