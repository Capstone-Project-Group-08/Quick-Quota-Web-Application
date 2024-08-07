import React, { useState, useEffect } from 'react';
import './Analyze.css';

const Analyze = () => {
    const [sessionData, setSessionData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('session_data')) || [];
        setSessionData(storedData);
    }, []);

    const getBestScreenTimeIdea = () => {
        if (sessionData.length === 0) return "No data available.";
        const totalHours = sessionData.reduce((sum, session) => sum + session.duration, 0);
        const averageHours = (totalHours / sessionData.length).toFixed(2);
        const bestSession = Math.min(...sessionData.map(session => session.duration)).toFixed(2);
        return `Your average daily screen time is ${averageHours} hours. Your best session was ${bestSession} hours.`;
    };

    const getDailyCount = () => {
        return sessionData.length;
    };

    const getWeeklyScreenTimeCount = () => {
        const currentDate = new Date();
        const weekAgoDate = new Date();
        weekAgoDate.setDate(currentDate.getDate() - 7);

        const weeklySessions = sessionData.filter(session => {
            const sessionDate = new Date(session.date);
            return sessionDate >= weekAgoDate && sessionDate <= currentDate;
        });

        const totalWeeklyHours = weeklySessions.reduce((sum, session) => sum + session.duration, 0);
        return totalWeeklyHours.toFixed(2);
    };

    const getDayByDayScreenTimeList = () => {
        return sessionData.map((session, index) => (
            <li key={index}>
                {session.date}: {session.duration} hours
            </li>
        ));
    };

    return (
        <div className="analyze-container">
            <h2>Screen Time Analysis</h2>
            <p className="screen-time-idea">{getBestScreenTimeIdea()}</p>
            <h3>Statistics</h3>
            <p>Daily Count: {getDailyCount()}</p><br></br>
            <p>Weekly Screen Time: {getWeeklyScreenTimeCount()} hours</p>
            <h3>Day by Day Screen Time</h3>
            <ul className="day-by-day-list">
                {getDayByDayScreenTimeList()}
            </ul>
            <h3>Best Practices to Manage Screen Time</h3>
            <ul className="tips-list">
                {getBestScreenTimeTips().map((tip, index) => (
                    <li key={index}>{tip}</li>
                ))}
            </ul>
        </div>
    );
};

const getBestScreenTimeTips = () => {
    return [
        "Take regular breaks every 30 minutes.",
        "Use blue light filters or glasses.",
        "Set a daily screen time limit and stick to it.",
        "Engage in physical activities to reduce sedentary time.",
        "Practice the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for at least 20 seconds."
    ];
};

export default Analyze;
