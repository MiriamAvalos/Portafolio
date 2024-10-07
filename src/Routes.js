import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Works from './components/Works';
import Contact from './components/Contact';

const AppRoutes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/demo-morty-videogame" element={<Contact />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
