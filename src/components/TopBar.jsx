import React, { useState, useEffect } from 'react';
import styles from './TopBar.module.css';

const TopBar = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className={styles.topBar}>
            <div className={styles.systemInfo}>
                <span>SYSTEM_ID: MOONLIT_v1.0</span>
                <span className={styles.divider}>|</span>
                <span>ONLINE</span>
            </div>
            <div className={styles.timeCluster}>
                <span>{formatTime(time)}</span>
            </div>
        </div>
    );
};

export default TopBar;
