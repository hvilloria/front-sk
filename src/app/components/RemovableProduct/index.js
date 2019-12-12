import React, { Component } from 'react';
import { FaMinus } from 'react-icons/fa';
import { IconContext } from 'react-icons';

class RemovableProduct extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleProductRemover(this.props.indexOfProduct);
  }
  render() {
    return (
      <li>
        {this.props.name} {this.props.variant.name} {this.props.variant.price}
        <IconContext.Provider value={{ style: { marginLeft: '5px', marginBottom: '5px' } }}>
          <FaMinus onClick={this.handleClick}/>
        </IconContext.Provider>
      </li>
    )
  }
}

export default RemovableProduct;