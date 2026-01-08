import React, { useState, useEffect } from 'react';
import styles from './Layout.module.css';
import crtStyles from '../components/CRTEffect.module.css';
import bgAsset1 from '../assets/bg_1.jpg';
import bgAsset2 from '../assets/bg_2.jpg';
import bgAsset3 from '../assets/bg_3.jpg';
import bgMainAsset from '../assets/bg_main.jpg';
import pixelPetAsset from '../assets/pixel_pet.jpg';

// All backgrounds from public and assets folder
const backgrounds = [
  '/bg1.jpeg',
  '/bg2.jpeg',
  '/bg3.jpeg',
  '/bg4.jpeg',
  '/bg5.jpeg',
  '/bg6.jpeg',
  '/bg7.jpeg',
  '/bg8.jpeg',
  '/bg10.jpeg',
  '/bg11.jpeg',
  '/bg main.jpeg',
  '/bg dream.jpeg',
  '/bg idk.jpeg',
  '/bg yes.jpeg',
  bgAsset1,
  bgAsset2,
  bgAsset3,
  bgMainAsset,
  pixelPetAsset
];


import TopBar from '../components/TopBar';

const Layout = ({ children, isTripMode, toggleTripMode }) => {
  const [bgIndex, setBgIndex] = useState(0);
  // ... existing state ...
  const [isCRT, setIsCRT] = useState(false);
  const [isTransMode, setIsTransMode] = useState(false);
  const TRANS_SPEED_MS = 150;

  useEffect(() => {
    let interval;
    if (isTransMode) {
      interval = setInterval(() => {
        setBgIndex((prev) => (prev + 1) % backgrounds.length);
      }, TRANS_SPEED_MS);
    }
    return () => clearInterval(interval);
  }, [isTransMode]);

  const cycleBackground = () => {
    setBgIndex((prev) => (prev + 1) % backgrounds.length);
  };

  const currentBg = backgrounds[bgIndex];

  return (
    <div className={styles.container} style={{ backgroundImage: `url("${currentBg}")` }}>

      <button className={styles.bgToggle} onClick={cycleBackground}>
        BG: {String(bgIndex + 1).padStart(2, '0')}
      </button>

      <button className={`${styles.crtToggle} ${isCRT ? styles.active : ''}`} onClick={() => setIsCRT(!isCRT)}>
        VHS: {isCRT ? 'ON' : 'OFF'}
      </button>

      <button className={`${styles.tripToggle} ${isTripMode ? styles.active : ''}`} onClick={toggleTripMode}>
        TRIP: {isTripMode ? 'ON' : 'OFF'}
      </button>

      <button className={`${styles.transToggle} ${isTransMode ? styles.active : ''}`} onClick={() => setIsTransMode(!isTransMode)}>
        TRANS: {isTransMode ? 'ON' : 'OFF'}
      </button>

      {isCRT && <div className={crtStyles.crtOverlay}></div>}

      <div className={styles.overlay}>
        <div className={styles.mainWrapper}>
          <TopBar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
