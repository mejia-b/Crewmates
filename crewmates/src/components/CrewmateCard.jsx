import React from 'react';
import crewmateImg from '../assets/crewmate.png';

const CrewmateCard = ({crewmate}) => {
    return (
        <div className="crewmate-card">
            <a href={`/stats/${crewmate.id}`} style={{color:'white'}}>
                <img src={crewmateImg} alt="Outline of an astronaut" className='single-crewmate' height="150px" width="auto"/>
                <h3>Name of Crewmate: <span>{crewmate.name}</span></h3>
                <h3>Speed of Crewmate: <span>{crewmate.speed}</span></h3>
                <h3>Color of Crewmate: <span>{crewmate.color}</span></h3>
            </a>
            <a href={`/edit/${crewmate.id}`}><button type='button'>Edit Crewmate</button></a>
        </div>
    );
};

export default CrewmateCard;