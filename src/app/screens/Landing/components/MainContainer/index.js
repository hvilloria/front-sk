import React, { Component } from 'react';
import { HomeSection, AboutSection } from '~screens';
import styles from './Main.module.scss';

class MainContainer extends Component {
  render() {
    return (
      <div className={styles.MainContainer}>
        <HomeSection />
        <AboutSection />
      </div>
    )
  }
}

export default MainContainer;