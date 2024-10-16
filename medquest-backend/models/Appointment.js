const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;