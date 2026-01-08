import React from 'react';
import styles from './RetroWindow.module.css';

const RetroWindow = () => {
    return (
        <div className={styles.window}>
            {/* Title Bar */}
            <div className={styles.titleBar}>
                <div className={styles.controls}>
                    <div className={`${styles.control} ${styles.close}`}></div>
                    <div className={`${styles.control} ${styles.minimize}`}></div>
                    <div className={`${styles.control} ${styles.maximize}`}></div>
                </div>
                <div className={styles.titleText}>MOON_LOG.sys</div>
                <div style={{ width: '40px' }}></div> {/* Spacer for center alignment balance */}
            </div>

            {/* Main Body */}
            <div className={styles.body}>
                {/* Left Sidebar */}
                <div className={styles.sidebar}>
                    <div className={styles.channel}># general</div>
                    <div className={`${styles.channel} ${styles.activeChannel}`}># log_v1</div>
                    <div className={styles.channel}># dreams</div>
                    <div className={styles.channel}># music</div>
                </div>

                {/* Right Content */}
                <div className={styles.mainContent}>
                    <div className={styles.feed}>
                        {/* Fake Messages */}
                        <div className={styles.message}>
                            <div>
                                <span className={styles.username}>system_admin</span>
                                <span className={styles.timestamp}>10:23 AM</span>
                            </div>
                            <div>System initialization complete. Welcome back, user.</div>
                        </div>

                        <div className={styles.message}>
                            <div>
                                <span className={styles.username}>moonlit_bot</span>
                                <span className={styles.timestamp}>10:45 AM</span>
                            </div>
                            <div>
                                Scanning for new frequencies... <br />
                                3 new tracks detected.
                            </div>
                        </div>

                        {/* Image Placeholder */}
                        <div className={styles.message}>
                            <div>
                                <span className={styles.username}>visual_feed</span>
                                <span className={styles.timestamp}>11:00 AM</span>
                            </div>
                            <div className={styles.imageContainer}>
                                <div className={styles.imagePlaceholder}>
                                    NO SIGNAL<br />
                                    [SEARCHING]
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fake Input */}
                    <div className={styles.inputArea}>
                        <input type="text" className={styles.input} placeholder="Enter log entry..." disabled />
                        <button className={styles.sendBtn}>SEND</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RetroWindow;
