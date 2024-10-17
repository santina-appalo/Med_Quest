import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Home component
import Login from './components/Login'; // Login component
import Register from './components/Register'; // Register component
import Dashboard from './components/Dashboard'; // Dashboard component
import Appointment from './components/Appointment'; // Appointments component
//import NotFound from './components/NotFound'; // Optional: for handling 404
import Error from './components/Error';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="appointment" element={<Appointment />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Error />} /> {/* Optional: catch-all route */}
            </Routes>
        </Router>
    );
};

export default App;