import React from 'react';
import { Link } from 'react-router-dom';

function Homepage () {
    return (
        <div className='jumbotron'>
            <h1>Pluralsight Administration</h1>
            <p>React, Redux and react router for responsive web app</p>
            <Link to='about' className='btn btn-primary btn-lg'>Learn More</Link>
        </div>
    )
}

export default Homepage;