import React, { Component } from 'react';
import { HomeSection, About, DropdownMenu } from '~screens';
import styles from './mainContainer.module.scss';

class MainContainer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <HomeSection />
        <About />
        <DropdownMenu />
      </div>
    )
  }
}

export default MainContainer;
