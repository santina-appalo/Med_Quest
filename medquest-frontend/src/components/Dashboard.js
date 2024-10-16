import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await fetch('/api/appointments'); // Adjust endpoint as needed
            const data = await response.json();
            setAppointments(data);
        };
        fetchAppointments();
    }, []);

    return (
        <div className="dashboard-container">
            <h2>Your Appointments</ h2>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment._id}>{appointment.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;