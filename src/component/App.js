import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Navbar from './Navbar/Navbar';
import HeaderContent from './HeaderContent/HeaderContent';

const App = () => {

    return (
        <BrowserRouter>
            <div className="app">
                <header>
                    <Navbar />
                    <HeaderContent />
                </header>
            </div>
        </BrowserRouter>
    );
};


export default App;