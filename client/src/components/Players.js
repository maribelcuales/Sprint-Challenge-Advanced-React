import React from 'react';
import NavBar from './Navbar'; 

const Players = props => {
  return (
    <div>
      <NavBar /> 
      <div key="player" className="player">
        {props.players.map(player => (
          <div className="player-details"> 
            <h3>Name: {player.name}</h3>
            <p>Country: {player.country}</p>
            <p>Searches: {player.searches}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players; 
