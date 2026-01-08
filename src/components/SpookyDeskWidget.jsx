import React from 'react';
import styles from './SpookyDeskWidget.module.css';

const SpookyDeskWidget = () => {
    return (
        <div className={styles.deskWindow}>
            <div className={styles.header}>
                <span>VIBE_CHECK.SYS</span>
                <span>[ ] [x]</span>
            </div>

            {/* Spooky Wall/Shelf */}
            <div className={styles.shelf}>
                <div className={styles.shelfItem}></div>
                <div className={styles.shelfItem}></div>
                <div className={styles.shelfItem}></div>
            </div>

            {/* The Main Monitor */}
            <div className={styles.monitor}>
                <div className={styles.monitorInner}>
                    <div className={styles.startingSoon}>
                        STARTING SOON...
                    </div>
                </div>
            </div>

            {/* Decorations */}
            <div className={`${styles.item} ${styles.ghost}`}></div>
            <div className={`${styles.item} ${styles.candle}`}></div>
            <div className={`${styles.item} ${styles.skeleton}`}></div>
            <div className={`${styles.item} ${styles.mimikyu}`}></div>
            <div className={`${styles.item} ${styles.bat}`}></div>
            <div className={`${styles.item} ${styles.spider}`}></div>

            {/* The Desk Surface */}
            <div className={styles.deskSurface}>
                <div className={styles.keyboard}></div>
            </div>
        </div>
    );
};

export default SpookyDeskWidget;
