import React, { useState, useEffect } from 'react';
import styles from './GuestBook.module.css';

const MOODS = ['😊', '🤔', '😎', '🥳', '😴', '🤯', '💀', '👽', '🌙', '⭐'];
const BORDER_COLORS = ['#00b7eb', '#ff00aa', '#00ff00', '#ffd700', '#ff0055', '#bd00ff'];

const GuestBook = () => {
    const [entries, setEntries] = useState([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [selectedMood, setSelectedMood] = useState('😊');

    useEffect(() => {
        const saved = localStorage.getItem('guestbook_entries');
        if (saved) {
            setEntries(JSON.parse(saved));
        }
    }, []);

    const handleSign = () => {
        if (!name.trim() || !message.trim()) {
            alert('Please fill in both name and message!');
            return;
        }

        const newEntry = {
            id: Date.now(),
            name: name.trim(),
            message: message.trim(),
            mood: selectedMood,
            timestamp: new Date().toLocaleString(),
            borderColor: BORDER_COLORS[Math.floor(Math.random() * BORDER_COLORS.length)]
        };

        const updatedEntries = [newEntry, ...entries];
        setEntries(updatedEntries);
        localStorage.setItem('guestbook_entries', JSON.stringify(updatedEntries));

        setName('');
        setMessage('');
        setSelectedMood('😊');
    };

    const handleDelete = (id) => {
        if (confirm('Delete this entry?')) {
            const updatedEntries = entries.filter(entry => entry.id !== id);
            setEntries(updatedEntries);
            localStorage.setItem('guestbook_entries', JSON.stringify(updatedEntries));
        }
    };

    const handleClearAll = () => {
        if (confirm('Clear ALL entries? This cannot be undone!')) {
            setEntries([]);
            localStorage.removeItem('guestbook_entries');
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>◉ GUEST_BOOK.TXT</span>
                <div className={styles.headerRight}>
                    <span className={styles.count}>[{entries.length}]</span>
                    {entries.length > 0 && (
                        <button onClick={handleClearAll} className={styles.clearBtn}>
                            🗑️ CLEAR
                        </button>
                    )}
                </div>
            </div>

            <div className={styles.signSection}>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        placeholder="YOUR NAME..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={30}
                        className={styles.input}
                    />
                    <span className={styles.charCount}>{name.length}/30</span>
                </div>

                <div className={styles.inputGroup}>
                    <textarea
                        placeholder="LEAVE A MESSAGE..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        maxLength={200}
                        className={styles.textarea}
                        rows={3}
                    />
                    <span className={styles.charCount}>{message.length}/200</span>
                </div>

                <div className={styles.moodSection}>
                    <span className={styles.moodLabel}>MOOD:</span>
                    <div className={styles.moodPicker}>
                        {MOODS.map(mood => (
                            <button
                                key={mood}
                                className={`${styles.moodBtn} ${selectedMood === mood ? styles.selected : ''}`}
                                onClick={() => setSelectedMood(mood)}
                            >
                                {mood}
                            </button>
                        ))}
                    </div>
                </div>

                <button onClick={handleSign} className={styles.signBtn}>
                    ✎ SIGN THE BOOK
                </button>
            </div>

            <div className={styles.entriesSection}>
                <div className={styles.entriesHeader}>SIGNATURES:</div>
                <div className={styles.entriesList}>
                    {entries.length === 0 ? (
                        <div className={styles.emptyState}>
                            ✨ No signatures yet... be the first! ✨
                        </div>
                    ) : (
                        entries.map(entry => (
                            <div
                                key={entry.id}
                                className={styles.entry}
                                style={{ borderLeftColor: entry.borderColor }}
                            >
                                <div className={styles.entryHeader}>
                                    <div className={styles.entryLeft}>
                                        <span className={styles.entryMood}>{entry.mood}</span>
                                        <span className={styles.entryName}>{entry.name}</span>
                                    </div>
                                    <div className={styles.entryRight}>
                                        <span className={styles.entryDate}>{entry.timestamp}</span>
                                        <button
                                            className={styles.deleteBtn}
                                            onClick={() => handleDelete(entry.id)}
                                            title="Delete entry"
                                        >
                                            ×
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.entryMessage}>{entry.message}</div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default GuestBook;
