import React from 'react';
import styles from './Dashboard.module.css';
import MusicPlayer from '../components/MusicPlayer';
import MoonWidget from '../components/MoonWidget';
import PixelPet from '../components/PixelPet';
import LifeUpdateWidget from '../components/LifeUpdateWidget';
import BlinkiesWidget from '../components/BlinkiesWidget';
import DreamWidget from '../components/DreamWidget';
import SpookyDeskWidget from '../components/SpookyDeskWidget';
import RetroWindow from '../components/RetroWindow';

const Dashboard = ({ isTripMode }) => {
    return (
        <div className={`${styles.desktopArea} ${isTripMode ? styles.tripActive : ''}`}>
            {/* Fixed Music Player - floats above everything */}
            <div className={styles.heroPlayer}>
                <MusicPlayer />
            </div>

            <div className={styles.leftSection}>
                <MoonWidget />
                <PixelPet />
                <LifeUpdateWidget />
                <BlinkiesWidget />
            </div>

            {/* Spacer for center column */}
            <div className={styles.centerStage}>
            </div>

            <div className={styles.rightSection}>
                <SpookyDeskWidget />
                <DreamWidget />
                <RetroWindow />
                {/* <GuestBook /> */}
            </div>
        </div>
    );
};

export default Dashboard;
