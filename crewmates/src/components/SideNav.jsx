import React from 'react';
import peeking from '../assets/peeking.png'

const SideNav = () => {
    return (
        <div className="sidenav">
            <a href="/" style={{color: 'white', margin: '20px'}}>Home</a>
            <a href="/create" style={{color: 'white', margin: '20px'}}>Create a Crewmate</a>
            <a href="/gallery" style={{color: 'white', margin: '20px'}}>Crewmate Gallery</a>
            <img src={peeking} alt="Astronaut peeking through a box" className='single-crewmate' height="150px" width="auto" style={{position: 'absolute', bottom: '10px'}}/>
        </div>
    );
};

export default SideNav;