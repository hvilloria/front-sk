import React, { Component } from "react";
import OrderProduct from "../OrderProduct/OrderProduct";
import { FaPrint } from "react-icons/fa";
import ReactToPrint from 'react-to-print';

class Order extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.handlePrint = this.handlePrint.bind(this);
  }

  products(){
    return this.props.products.map((product, i) => {
      return <OrderProduct key={i} name={product.name} price={product.price}/>
    })
  }

  handlePrint() {
    return React.createElement('div', null, `Hello `)
  }

  render() {
    return (
      <tr ref={this.myRef}>
        <td>
          {this.props.client_name}
        </td>
        <td>
          {this.props.tracking_id}
        </td>
        <td>
          {this.props.service_type}
        </td>
        <td>
          {this.props.payment_type}
        </td>
        <td>
          Confirmado
        </td>
        <td>
          {this.products()}
        </td>
        <td>
          {this.props.total}
        </td>
        <td>
          <ReactToPrint trigger={() => <FaPrint/>} content={() => this.handlePrint()} />
        </td>
      </tr>
    )
  }
}

export default Order;
