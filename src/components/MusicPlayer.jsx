import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import styles from './MusicPlayer.module.css';
import { PLAYLIST } from '../models/playlist';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const audioRef = useRef(null);
    const [volume, setVolume] = useState(0.5);
    const [playerColor, setPlayerColor] = useState('#b39ddb'); // Default Lavender

    const currentTrack = PLAYLIST[currentTrackIndex];

    const themes = [
        { color: '#b39ddb', name: 'Lavender' },
        { color: '#ffb7ce', name: 'Pink' },
        { color: '#a5d6a7', name: 'Mint' }
    ];

    useEffect(() => {
        // Initialize or update audio source
        if (!audioRef.current) {
            audioRef.current = new Audio(currentTrack.url);
        } else {
            audioRef.current.src = currentTrack.url;
        }

        audioRef.current.volume = volume;

        // Auto-play if was playing
        const playAudio = async () => {
            try {
                if (isPlaying) {
                    await audioRef.current.play();
                }
            } catch (error) {
                console.log("Autoplay prevented:", error);
                setIsPlaying(false);
            }
        };

        playAudio();

        const handleEnded = () => {
            handleNext();
        };

        audioRef.current.addEventListener('ended', handleEnded);

        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('ended', handleEnded);
                audioRef.current.pause();
            }
        };
    }, [currentTrackIndex]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    const togglePlay = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            try {
                await audioRef.current.play();
                setIsPlaying(true);
            } catch (error) {
                console.error("Playback failed:", error);
                setIsPlaying(false);
            }
        }
    };

    const handleNext = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
    };

    const handlePrev = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length);
    };

    const handleVolumeChange = (e) => {
        setVolume(parseFloat(e.target.value));
    };

    return (
        <div className={styles.player} style={{ backgroundColor: playerColor }}>
            <div className={styles.themeSwitcher}>
                {themes.map((theme) => (
                    <button
                        key={theme.color}
                        className={styles.themeDot}
                        style={{ backgroundColor: theme.color }}
                        onClick={() => setPlayerColor(theme.color)}
                        title={theme.name}
                    />
                ))}
            </div>

            <div className={styles.playerScreen}>
                <div className={styles.visualizer}>
                    <div className={`${styles.bar} ${isPlaying ? styles.animating : ''}`}></div>
                    <div className={`${styles.bar} ${isPlaying ? styles.animating : ''}`} style={{ animationDelay: '0.1s' }}></div>
                    <div className={`${styles.bar} ${isPlaying ? styles.animating : ''}`} style={{ animationDelay: '0.2s' }}></div>
                    <div className={`${styles.bar} ${isPlaying ? styles.animating : ''}`} style={{ animationDelay: '0.3s' }}></div>
                    <div className={`${styles.bar} ${isPlaying ? styles.animating : ''}`} style={{ animationDelay: '0.4s' }}></div>
                </div>

                <div className={styles.trackInfo}>
                    <div className={styles.title}>{currentTrack.title}</div>
                    <div className={styles.artist}>{currentTrack.artist}</div>
                </div>
            </div>

            <div className={styles.controls}>
                <button className={styles.btn} onClick={handlePrev}><SkipBack size={20} /></button>
                <button className={`${styles.btn} ${styles.playBtn}`} onClick={togglePlay}>
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button className={styles.btn} onClick={handleNext}><SkipForward size={20} /></button>
            </div>

            <div className={styles.volume}>
                <button
                    className={styles.muteBtn}
                    onClick={() => setVolume(prev => prev === 0 ? 0.5 : 0)}
                >
                    <Volume2 size={16} />
                </button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className={styles.volSlider}
                />
            </div>
        </div>
    );
};

export default MusicPlayer;
