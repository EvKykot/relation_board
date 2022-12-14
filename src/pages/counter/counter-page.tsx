import React from 'react';
import logo from '../../images/logo.svg';
import { Counter } from '../../components/counter/counter';
import styles from './counter.module.scss';

const CounterPage = () => (
  <div className={styles.app}>
    <header className={styles.appHeader}>
      <img src={logo} className={styles.appLogo} alt="logo" />
      <Counter />
    </header>
  </div>
);

export default CounterPage;
