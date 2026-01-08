import React, { useState, useRef, useEffect } from 'react';
import styles from './RadioTuner.module.css';

const RadioTuner = () => {
    const [frequency, setFrequency] = useState(88.5);
    const [isDragging, setIsDragging] = useState(false);
    const trackRef = useRef(null);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        // Calculate frequency based on position
        // This is a simplified visual simulation
        const rect = trackRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;

        let percentage = x / width;
        percentage = Math.max(0, Math.min(1, percentage));

        // Range 88.0 to 108.0
        const freq = 88 + (percentage * 20);
        setFrequency(freq.toFixed(1));
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className={styles.radioWindow}>
            <div className={styles.header}>
                <span>FM_TUNER.MOD</span>
                <div className={styles.lights}>
                    <div className={`${styles.light} ${isDragging ? styles.active : ''}`}></div>
                    <div className={styles.light}></div>
                </div>
            </div>

            <div className={styles.display}>
                <span className={styles.freq}>{frequency}</span>
                <span className={styles.mhz}>MHz</span>
            </div>

            <div className={styles.scaleContainer} ref={trackRef} onMouseDown={handleMouseDown}>
                <div className={styles.scaleBackground}>
                    {/* Generate some scale lines */}
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className={styles.tick} style={{ left: `${i * 5}%`, height: i % 5 === 0 ? '20px' : '10px' }}></div>
                    ))}
                </div>
                <div className={styles.needle} style={{ left: `${(frequency - 88) / 20 * 100}%` }}></div>
            </div>

            <div className={styles.knobs}>
                <div className={styles.knob}>VOL</div>
                <div className={styles.knob}>TUNE</div>
            </div>
        </div>
    );
};

export default RadioTuner;
