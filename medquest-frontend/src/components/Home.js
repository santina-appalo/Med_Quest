import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Import your Navbar component

const Home = () => {
    return (
        <div>
            <Navbar /> {/* Render the Navbar */}
            <Outlet /> {/* Render child routes here */}
        </div>
    );
};

export default Home;