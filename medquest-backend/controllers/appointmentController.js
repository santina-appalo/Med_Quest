const Appointment = require('../models/Appointment');

const createAppointment = async (req, res) => {
    const { title, date, userId } = req.body;
    try {
        const appointment = new Appointment({ title, date, userId });
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating appointment' });
    }
};

const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ userId: req.params.userId });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments' });
    }
};

module.exports = { createAppointment, getAppointments };