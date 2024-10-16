import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const res = await axios.get('/api/appointments', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                });
                setAppointments(res.data);
            } catch (err) {
                console.error(err.response.data);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div>
            <h1>Your Appointments</h1>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment._id}>
                        Doctor: {appointment.doctor.username}, Date: {new Date(appointment.date).toLocaleDateString()}, Reason: {appointment.reason}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
