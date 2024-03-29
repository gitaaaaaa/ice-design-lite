import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/" className={styles.logo}>
        <img src="/imgs/logo.png" alt="logo"/>
        <h1>杭州麟云科技有限公司</h1>
      </Link>
    </div>
  );
}
