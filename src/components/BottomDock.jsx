import React from 'react';
import styles from './BottomDock.module.css';
import BlinkiesWidget from './BlinkiesWidget';
import Marquee from './Marquee';

const BottomDock = () => {
    return (
        <div className={styles.bottomDock}>
            <div className={styles.dockInner}>
                <BlinkiesWidget />
                <div className={styles.marqueeContainer}>
                    <Marquee text="*** WELCOME TO MOONLIT PLAYER *** LISTENING TO THE SOUNDS OF THE UNIVERSE *** " />
                </div>
            </div>
        </div>
    );
};

export default BottomDock;
