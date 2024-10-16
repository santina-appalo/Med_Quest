import React, { useState } from 'react';

const Appointment = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, date }),
            });
            if (!response.ok) throw new Error('Appointment creation failed');
            // Handle successful appointment creation (e.g., redirect to dashboard)
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="appointment-container">
            <h2>Create Appointment</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
                <input type="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} required />
                <button type="submit">Create Appointment</button>
            </form>
        </div>
    );
};

export default Appointment;