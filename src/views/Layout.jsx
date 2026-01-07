import React from 'react';
import bgMain from '../assets/bg_main.jpg';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${bgMain})` }}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
