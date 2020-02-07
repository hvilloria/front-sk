import React, { Component } from 'react';
import styles from './footer.module.scss';
import logo from '../../../../../assets/images/logo.svg';
import whatsappIcon from '../../../../../assets/images/whatsapp.svg';
import instagramIcon from '../../../../../assets/images/instagram.svg';

class Footer extends Component{
  render(){
    return(
      <div className={styles.footerContainer}>
        <img src={logo} alt=''/>
        <div className={styles.whatsappContainer}>
          <img src={whatsappIcon} className={styles.whatsappIcon} alt=''/>
          <h2 className={`${styles.text} ${styles.text__withMargin}`}>
            Take Away y Delivery 11 7539056
          </h2>
        </div>
        <div className={styles.instagramContainer}>
          <h2 className={styles.text}>
            <img src={instagramIcon} className={styles.instagramIcon} alt=''/>
            ¡Hola! Seguínos a @shirokurosushi y comparte tus historias con nosotros
          </h2>
        </div>
        <span className={styles.copyrightText}>
          Algunas de las imágenes usadas pueden ser referenciales.
          <br/>
          Todos los derechos reservados © Shirokuro, 2019
        </span>
      </div>
    )
  }
}

export default Footer;