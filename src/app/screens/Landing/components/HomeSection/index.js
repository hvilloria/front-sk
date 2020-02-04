import React, { Component } from 'react';
import clickToOrder from '../../../../../assets/images/click_to_order.svg';
import styles from './homeSection.module.scss';


class HomeSection extends Component {
  render() {
    return (
      <div className={styles.homeContainer}>
        <div className={styles.titlesContainer}>
          <h1 className={styles.title}>SHIROKURO</h1>
          <h2 className={styles.subtitle}>TakeAway & Delivery</h2>
        </div>
        <div className={styles.clickToOrderContainer}>
          <img src={clickToOrder} className={styles.clickToOrderImg} alt=''/>
          <h4 className={styles.clickToOrderText}>Quiero hacer un Pedido</h4>
        </div>
      </div>
    )
  }
}

export default HomeSection;