import React from 'react';
import styles from './LifeUpdateWidget.module.css';

const LifeUpdateWidget = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>LIFE_UPDATE.LOG</span>
                <span className={styles.rec}>REC ●</span>
            </div>

            <div className={styles.videoContainer}>
                <video
                    className={styles.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/life_update_video.mp4" type="video/mp4" />
                </video>
                <div className={styles.scanlines}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.updateItem}>
                    <span className={styles.date}>[TODAY]</span>
                    <p>Thinking about the future. New features loading...</p>
                </div>
                <div className={styles.updateItem}>
                    <span className={styles.date}>[YESTERDAY]</span>
                    <p>Reorganized the digital space. Feeling boxy.</p>
                </div>
            </div>
        </div>
    );
};

export default LifeUpdateWidget;
