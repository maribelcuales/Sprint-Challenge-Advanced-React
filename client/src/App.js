import React from 'react';

import './App.css';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Let's Play!</h1>
        <Players /> 
      </div>
    );
  }
}

export default App;
