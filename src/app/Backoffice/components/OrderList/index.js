import React, { useEffect, useState } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import { getOrders } from '../../../../services/backSkService';
import styles from './styles.module.scss';
import { OrderDetail } from '~components';
import Modal from '@material-ui/core/Modal';


function OrderList() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    getOrders().then((orders)=>{ setOrders(orders.data)})
  }, [])

  const handleClick = (order)=>{
    setSelectedOrder(order);
    setOpen(true);
  }

  return (
    <>
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Cliente</TableCell>
            <TableCell>Nro orden</TableCell>
            <TableCell>Retiro</TableCell>
            <TableCell>Pago</TableCell>
            <TableCell>Productos</TableCell>
            <TableCell>Fecha</TableCell>
            <TableCell>Teléfono</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { orders.length > 0  && orders.map((order) => {
          return(
            <TableRow key={order.id} onClick={()=> handleClick(order)}>
              <TableCell component="th" scope="row">{order.client_name}</TableCell>
              <TableCell>{order.tracking_id}</TableCell>
              <TableCell>{order.service_type}</TableCell>
              <TableCell>{order.payment_type}</TableCell>
              <TableCell>{order.products.map((product, i) => {
                return ( <li key={i}>{product.name}</li> )
              })}</TableCell>
              <TableCell>{order.created_at}</TableCell>
              <TableCell>{order.client_phone_number}</TableCell>
              <TableCell>{order.total}</TableCell>
            </TableRow>
          )
        })}
        </TableBody>
      </Table>
    </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <OrderDetail {...selectedOrder}/>
      </Modal>
    </>
  );
}

export default OrderList;
