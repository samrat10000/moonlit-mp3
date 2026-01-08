import React, { useState, useEffect } from 'react';
import styles from './PixelPet.module.css';

const PixelPet = () => {
    const [mood, setMood] = useState('idle'); // idle, happy, sleep
    const [frame, setFrame] = useState(0);

    // Simple frame animation
    useEffect(() => {
        const interval = setInterval(() => {
            setFrame(f => (f + 1) % 2);
        }, 500);
        return () => clearInterval(interval);
    }, []);

    const handleInteract = () => {
        setMood('happy');
        setTimeout(() => setMood('idle'), 2000);
    };

    // ASCII Art Frames
    const sprites = {
        idle: [
            "(^-^)",
            "(o-o)"
        ],
        happy: [
            "(^0^)/",
            "\\(^0^)"
        ],
        sleep: [
            "(-.-) zzz",
            "(-,-) ZZZ"
        ]
    };

    return (
        <div className={styles.petWindow} onClick={handleInteract}>
            <div className={styles.header}>
                <span>VIRTUAL_FRIEND.DAT</span>
                <div className={styles.statusBox}>
                    {mood === 'idle' ? 'ONLINE' : mood.toUpperCase()}
                </div>
            </div>
            <div className={styles.screen}>
                <div className={`${styles.pet} ${mood === 'happy' ? styles.bounce : ''}`}>
                    {sprites[mood][frame]}
                </div>
                <div className={styles.floor}></div>
            </div>
        </div>
    );
};

export default PixelPet;
