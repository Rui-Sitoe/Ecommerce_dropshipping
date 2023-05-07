import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/About';

const AppRouter = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>

        <Routes>
            <Route exact path="/about" element={<About />} />
        </Routes>

    </Router>
);

export default AppRouter;
