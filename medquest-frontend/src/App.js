import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Appointment from './components/Appointment';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/appointments" element={<Appointment />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;