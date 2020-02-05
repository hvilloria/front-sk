import React, { Component } from 'react';
import styles from './about.module.scss';
import aboutImg from '../../../../../assets/images/about_img.png';
import servicesImg from '../../../../../assets/images/services_img.png';

class About extends Component {
  render(){
    return(
      <div className={styles.aboutContainer}>
        <div>
          <h3 className={styles.subtitle}>Amamos lo que hacemos.</h3>
          <h2 className={styles.title}>¡Hacemos Sushi!</h2>
          <span className={styles.text}>Sentimos pasión por la cocina y la Cultura Gastronómica Japonesa.
            <br/>
            <br/>
            Preparamos nuestros platos con los más frescos ingredientes, para que vivas una experiencia única y actives todos tus sentidos. 
          </span>
        </div>
        <img src={aboutImg} className={styles.img} alt=''/>
        <div>
          <h2 className={styles.title}>TakeAway & Delivery</h2>
          <span className={styles.text}>Sabemos lo importante de ahorra tiempo estos días. 
            Trabajamos en familia para que tus pedidos sean cada  vez más rápidos y puedas disfrutar de ello desde la comodidad de tu casa, 
            oficina o juntada con amigos. 
            Podes realizar tus pedidos desde tu móvil contactando desde WhatsApp  o en  las diferentes plataformas de delivery. 
          </span>
        </div>
        <img src={servicesImg} className={styles.img} alt=''/>
      </div>
    )
  }
}

export default About;
