import React, { Component } from 'react';
import makeorder from '~assets/images/makeorder.png';
import styles from './HomeSection.module.scss';


class HomeSection extends Component {
  render() {
    return (
      // caja banner
      <div className={styles.BannerContainer}>
        {/* contenedor de titulo y subtitulo */}
        <div className={styles.PresentationContainer}>
          {/* titulo */}
          <h1 className={styles.Title}>SHIROKURO</h1>
          <h2 className={styles.Subtitle}>Take Away & Delivery</h2>
        </div>
        {/* contenedor icono y texto */}
        <div className={styles.MakeOrderContainer}>
          <img src={makeorder} className={styles.Img}></img>
          <h3>Quiero hacer un pedido</h3>
        </div>
      </div>
    )
  }
}

export default HomeSection;