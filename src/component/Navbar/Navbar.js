import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {

    return (
            <div className="container">
                <nav className="navbar">
                    <div>
                        <Link className="logo" to="/"><span>BD</span>Dud</Link>
                        <ul>
                            <li>
                                <Link>Home</Link>
                            </li>
                            <li>
                                <Link>Services</Link>
                            </li>
                            <li>
                                <Link>About</Link>
                            </li>
                        </ul>
                    </div>
                    <Link className="navbar__contactButton">Contact</Link>
                </nav>
            </div>
    );
};

export default Navbar;