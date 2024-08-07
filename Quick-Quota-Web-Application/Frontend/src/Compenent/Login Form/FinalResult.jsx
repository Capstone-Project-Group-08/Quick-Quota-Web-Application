import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import './FinalResult.css';
import 'chart.js/auto';

const FinalResult = () => {
    const [data, setData] = useState([]);
    const [logInTime, setLogInTime] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('session_data')) || [];
        setData(storedData);
        setLogInTime(new Date().getTime());
    }, []);

    const addSessionData = (session) => {
        const updatedData = [...data, session];
        setData(updatedData);
        localStorage.setItem('session_data', JSON.stringify(updatedData));
    };

    const handleAddSessionData = () => {
        const logOutTime = new Date().getTime();
        const duration = (logOutTime - logInTime) / (1000 * 60 * 60);
        const newSession = { date: new Date().toISOString().split('T')[0], duration };
        addSessionData(newSession);
        setLogInTime(logOutTime);
    };

    const handleAnalyzeClick = () => {
        navigate('/analyze');
    };

    const handleClearData = () => {
        localStorage.removeItem('session_data');
        setData([]);
    };

    const generateChartData = () => {
        return {
            labels: data.map((session) => session.date),
            datasets: [
                {
                    label: 'Screen Time (hours)',
                    data: data.map((session) => session.duration),
                    fill: false,
                    backgroundColor: 'rgb(75, 192, 192)',
                    borderColor: 'black',
                    borderWidth: 2,
                    pointBorderColor: 'black',
                    pointBackgroundColor: 'black',
                },
            ],
        };
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'black',
                    font: {
                        weight: 'bold',
                    },
                },
            },
            x: {
                ticks: {
                    color: 'black',
                    font: {
                        weight: 'bold',
                    },
                },
            },
        },
        plugins: {
            legend: {
                labels: {
                    color: 'black',
                    font: {
                        weight: 'bold',
                    },
                },
            },
        },
    };

    return (
        <div className="final-result-container">
            <h2>Your Progress</h2>
            <Line data={generateChartData()} options={chartOptions} />
            <button className='Final_btn' onClick={handleAddSessionData}>Add Session Data</button>
            <button className='Final_btn'onClick={handleAnalyzeClick}>Analyze</button>
            <button className='Final_btn' onClick={handleClearData}>Clear Data</button>
        </div>
    );
};

export default FinalResult;
