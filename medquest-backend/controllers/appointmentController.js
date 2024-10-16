const Appointment = require('../models/Appointment');

// Create appointment
exports.createAppointment = async (req, res) => {
    const { doctor, date, reason } = req.body;

    try {
        const appointment = new Appointment({
            user: req.user.id,
            doctor,
            date,
            reason,
        });

        await appointment.save();
        res.json(appointment);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Get user's appointments
exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({ user: req.user.id });
        res.json(appointments);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
