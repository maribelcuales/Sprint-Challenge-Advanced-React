import React from 'react';

const Players = props => {
  return (
    <div>
      <h1>Let's Play!</h1>
      <div key={props.players.id} className="player">
        {props.players.map(player => (
          <div> 
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
