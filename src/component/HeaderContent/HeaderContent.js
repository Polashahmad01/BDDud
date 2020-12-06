import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderContent.css';

const HeaderContent = () => {

    return (
        <div className="container headerContent">
           <div>
                <h1>We Help Business To Grow</h1>
                <p>Our marketing services are SEO-focused, customer driven and proven to deliver. We'll get you the traffic, link and rankings that drive big growth</p>
                <Link className="headerContent__contactButton">Contact</Link>
           </div>
           <div/>
        </div>
    );
};

export default HeaderContent;