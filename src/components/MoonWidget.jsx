import React, { useState, useEffect } from 'react';
import styles from './MoonWidget.module.css';

const MoonWidget = () => {
    const [phase, setPhase] = useState(0); // 0 to 1, where 0 is New Moon, 0.5 Full Moon
    const [phaseName, setPhaseName] = useState('');

    useEffect(() => {
        const calculateMoonPhase = (date) => {
            const synodicMonth = 29.53058867;
            const knownNewMoon = new Date('2000-01-06T18:14:00Z');
            const diffTime = date.getTime() - knownNewMoon.getTime();
            const diffDays = diffTime / (1000 * 60 * 60 * 24);
            const currentMoonAge = diffDays % synodicMonth;
            return currentMoonAge / synodicMonth;
        };

        const getPhaseName = (p) => {
            if (p < 0.03 || p > 0.97) return "NEW MOON";
            if (p < 0.25) return "WAXING CRESCENT";
            if (p < 0.28) return "FIRST QUARTER";
            if (p < 0.47) return "WAXING GIBBOUS";
            if (p < 0.53) return "FULL MOON";
            if (p < 0.72) return "WANING GIBBOUS";
            if (p < 0.75) return "LAST QUARTER";
            return "WANING CRESCENT";
        };

        const now = new Date();
        const p = calculateMoonPhase(now);
        setPhase(p);
        setPhaseName(getPhaseName(p));
    }, []);

    // Simple ASCII art or block representation of moon
    // For a cleaner look, let's use a CSS-based moon with shadow

    return (
        <div className={styles.moonWindow}>
            <div className={styles.header}>
                <span>MOON_PHASE.EXE</span>
                <div className={styles.controls}>
                    <div className={styles.box}></div>
                    <div className={styles.box}></div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.moonContainer}>
                    <div className={styles.moon} style={{ '--phase': phase }}>
                        <div className={styles.shadow}></div>
                    </div>
                </div>
                <div className={styles.info}>
                    <span className={styles.label}>CURRENT_PHASE:</span>
                    <span className={styles.value}>{phaseName}</span>
                    <span className={styles.coords}>LAT: 40.7128N</span>
                    <span className={styles.coords}>LON: 74.0060W</span>
                </div>
            </div>
        </div>
    );
};

export default MoonWidget;
