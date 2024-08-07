import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';
import alarmSound from '../../song.mp3';

const Timer = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isTimeSet, setIsTimeSet] = useState(false);
    const [unit, setUnit] = useState('seconds');
    const [message, setMessage] = useState('');
    const audioRef = useRef(null);

    useEffect(() => {
        let interval = null;
        if (isRunning && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0 && isRunning) {
            clearInterval(interval);
            setIsRunning(false);
            if (audioRef.current) {
                audioRef.current.play();
            }
            setMessage('Time completed');
        }
        return () => clearInterval(interval);
    }, [isRunning, time]);

    const handleStart = () => {
        setIsRunning(true);
        setIsTimeSet(true);
        setMessage('');
    };

    const handleChange = (event) => {
        let value = parseInt(event.target.value);
        if (unit === 'minutes') {
            value *= 60;
        } else if (unit === 'hours') {
            value *= 3600;
        }
        setTime(value);
    };

    const handleUnitChange = (event) => {
        setUnit(event.target.value);
    };

    const handleReset = () => {
        setIsRunning(false);
        setIsTimeSet(false);
        setTime(0);
        setMessage('');
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    };

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="timer-container">
            <input
                type="number"
                onChange={handleChange}
                placeholder={`Set time in ${unit}`}
                disabled={isTimeSet}
            />
            <select className="select2" value={unit} onChange={handleUnitChange} disabled={isTimeSet}>
                <option className="option1"value="seconds">Seconds</option>
                <option className="option1"value="minutes">Minutes</option>
                <option className="option1"value="hours">Hours</option>
            </select>

            <button className="Timer-btn"onClick={handleStart} disabled={isRunning || isTimeSet}> Set Time Limit</button>
            <button className="Timer-btn"onClick={handleReset} disabled={!isTimeSet}>Reset</button>

            <div className="timer-display">{formatTime(time)}</div>
            {message && <div className="timer-message">{message}</div>}
            <audio ref={audioRef} src={alarmSound} />
        </div>
    );
};

export default Timer;
