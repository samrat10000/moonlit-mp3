import React, { useState } from 'react';
import styles from './DreamWidget.module.css';

const DreamWidget = () => {
    const [view, setView] = useState('main'); // main, dreaming, awake

    const handleChoice = (choice) => {
        setView(choice);
    };

    const renderContent = () => {
        switch (view) {
            case 'dreaming':
                return (
                    <div className={styles.dialogBox}>
                        <div className={styles.question}>
                            The stars glow brighter...
                            <br /><br />
                            Time is but a digital illusion.
                        </div>
                        <div className={styles.options}>
                            <div className={styles.option} onClick={() => setView('main')}>Go back</div>
                        </div>
                    </div>
                );
            case 'awake':
                return (
                    <div className={styles.dialogBox}>
                        <div className={styles.question}>
                            The screen flickers.
                            <br /><br />
                            Welcome back to reality.
                        </div>
                        <div className={styles.options}>
                            <div className={styles.option} onClick={() => setView('main')}>Sleep again</div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className={styles.dialogBox}>
                        <div className={styles.question}>
                            Will you continue?
                        </div>
                        <div className={styles.options}>
                            <div className={styles.option} onClick={() => handleChoice('dreaming')}>
                                Keep dreaming
                            </div>
                            <div className={styles.option} onClick={() => handleChoice('awake')}>
                                Wake up
                            </div>
                        </div>
                    </div>
                );
        }
    };

    return (
        <div className={styles.dreamWindow}>
            <div className={styles.header}>
                <span>DREAM_STATE.EXE</span>
                <span>[ ] [x]</span>
            </div>
            <div className={styles.stars}></div>
            <div className={styles.clouds}></div>

            {renderContent()}
        </div>
    );
};

export default DreamWidget;
