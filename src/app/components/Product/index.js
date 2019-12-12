import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Variant } from '~components';
import styled from 'styled-components'

const ProductWrapper = styled.div`
  display: flex;
`
const VariantWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`
class Product extends Component {
  constructor(props) {
    super(props);
    this.handleVariantClick = this.handleVariantClick.bind(this);
    this.variants = this.variants.bind(this);
  }

  handleVariantClick(variant) {
    this.props.handleVariantSelected(this.props, variant)
  }

  variants() {
    const { variants } = this.props
    if (variants.length) {
      return variants.map((variant, i) => {
        return <Variant
          key={i}
          {...variant}
          handleVariantClick={this.handleVariantClick}
        />
      })
    } else {
      return null;
    }
  }

  render() {
    return (
      <ListGroup.Item>
        <ProductWrapper>
          <h6 style={{width: '50%'}}>nombre: {this.props.name}</h6>
          <VariantWrapper>
            {this.variants()}
          </VariantWrapper>
        </ProductWrapper>
      </ListGroup.Item>
    )
  }
}

export default Product;