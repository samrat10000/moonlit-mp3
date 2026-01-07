import React from 'react';
import styles from './Dashboard.module.css';
import MusicPlayer from '../components/MusicPlayer';
import Marquee from '../components/Marquee';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.header}>
                <h1>MOONLIT PLAYER 1.0</h1>
                <div className={styles.controls}>
                    <span>-</span>
                    <span>[]</span>
                    <span>x</span>
                </div>
            </div>
            <div className={styles.main}>
                <MusicPlayer />
            </div>
            <div className={styles.footer}>
                <Marquee text="*** WELCOME TO MOONLIT PLAYER *** LISTENING TO THE SOUNDS OF THE UNIVERSE *** " />
            </div>
        </div>
    );
};

export default Dashboard;
