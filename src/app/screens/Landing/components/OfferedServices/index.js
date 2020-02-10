import React, { Component } from 'react';
import styles from './services.module.scss';

class OfferedServices extends Component {
  render(){
    return(
      <>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesDescriptionContainer}>
            <h1 className={styles.title}>Mi Pedido</h1>
            <span className={styles.description}>
              Hacer tu pedido es muy sencillo. 
              Consultá nuestro menú y selecciona como querés recibir tu pedido.
              <br/>
              <br/>
              También podes visitarnos y disfrutar de nuestras promos en el local. 
            </span>
          </div>
          <div className={styles.serviceOptions}>
            <div className={`${styles.itemOption} ${styles.itemOption__redButton}`}>Take Away</div>
            <div className={styles.itemOption}>Pedidos Ya</div>
            <div className={styles.itemOption}>Rappi</div>
            <div className={styles.itemOption}>Glovo</div>
          </div>
        </div>
        <iframe
          title='shirokuroUbication' 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.730666125209!2d-58.51047346826171!3d-34.610971531111204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb772f44f0e51%3A0xb40ed2984cf39c4e!2sShirokuro%20Sushi!5e0!3m2!1ses-419!2sar!4v1580935098494!5m2!1ses-419!2sar" 
          width="400" 
          height="300" 
          frameBorder="0" 
          style={{border:0}}
          allowFullScreen=""
          className={styles.map}></iframe>
      </>
    )
  }
}

export default OfferedServices;