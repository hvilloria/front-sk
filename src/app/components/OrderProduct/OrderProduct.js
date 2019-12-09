import  React from "react";
const OrderProduct = (props) => {
  return (
    <React.Fragment>
      <li>{props.name}, {props.price}</li>
    </React.Fragment>
  )
}

export default OrderProduct;