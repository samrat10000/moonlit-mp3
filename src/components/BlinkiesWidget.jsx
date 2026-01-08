import React from 'react';
import styles from './BlinkiesWidget.module.css';

const BlinkiesWidget = () => {
    const blinkies = [
        { src: '/Blinkies/blinkiesCafe-0z.gif', alt: '0z' },
        { src: '/Blinkies/blinkiesCafe-1Q.gif', alt: '1Q' },
        { src: '/Blinkies/blinkiesCafe-3V.gif', alt: '3V' },
        { src: '/Blinkies/blinkiesCafe-DG.gif', alt: 'DG' },
        { src: '/Blinkies/blinkiesCafe-I1.gif', alt: 'I1' },
        { src: '/Blinkies/blinkiesCafe-Vj.gif', alt: 'Vj' },
        { src: '/Blinkies/blinkiesCafe-Xr.gif', alt: 'Xr' },
        { src: '/Blinkies/blinkiesCafe-h4.gif', alt: 'h4' },
        { src: '/Blinkies/blinkiesCafe-qv.gif', alt: 'qv' },
        { src: '/Blinkies/blinkiesCafe-tr.gif', alt: 'tr' },
    ];

    return (
        <div className={styles.widget}>
            <div className={styles.header}>
                <span className={styles.title}>BLINKIES.DLL</span>
                <div className={styles.controls}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.row}>
                    {blinkies.map((blinkie, index) => (
                        <div key={index} className={styles.blinkieItem}>
                            <img src={blinkie.src} alt={blinkie.alt} className={styles.blinkieImg} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlinkiesWidget;
