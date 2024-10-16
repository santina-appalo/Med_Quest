import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function AppointmentForm() {
    const [formData, setFormData] = useState({ doctor: '', date: '', reason: '' });
    const [doctors, setDoctors] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const res = await axios.get('/api/auth/doctors');
                setDoctors(res.data);
            } catch (err) {
                console.error(err.response.data);
            }
        };

        fetchDoctors();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/appointments', formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            history.push('/dashboard');
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <select name="doctor" value={formData.doctor} onChange={handleChange}>
                <option value="">Select Doctor</option>
                {doctors.map((doctor) => (
                    <option key={doctor._id} value={doctor._id}>
                        {doctor.username}
                    </option>
                ))}
            </select>
            <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
            />
            <input
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="Reason for appointment"
            />
            <button type="submit">Book Appointment</button>
        </form>
    );
}

export default AppointmentForm;
