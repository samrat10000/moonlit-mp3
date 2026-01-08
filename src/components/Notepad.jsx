import React, { useState, useEffect } from 'react';
import styles from './Notepad.module.css';

const Notepad = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const savedText = localStorage.getItem('moonlit_notepad');
        if (savedText) setText(savedText);
    }, []);

    const handleChange = (e) => {
        const newText = e.target.value;
        setText(newText);
        localStorage.setItem('moonlit_notepad', newText);
    };

    return (
        <div className={styles.notepadWindow}>
            <div className={styles.header}>
                <span>NOTES.TXT</span>
                <span className={styles.saveIndicator}>AUTO-SAVED</span>
            </div>
            <textarea
                className={styles.textarea}
                value={text}
                onChange={handleChange}
                placeholder="TYPE_THOUGHTS_HERE..."
                spellCheck="false"
            />
        </div>
    );
};

export default Notepad;
