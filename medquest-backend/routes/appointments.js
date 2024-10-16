const express = require('express');
const { createAppointment, getAppointments } = require('../controllers/appointmentController');
const auth = require('../middleware/auth');

const router = express.Router();

// Create appointment
router.post('/', auth, createAppointment);

// Get appointments
router.get('/', auth, getAppointments);

module.exports = router;
