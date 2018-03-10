import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = 'Welcome to the Road to learn React';
    var user = {first:'Laszlo',
                last: 'Lazuer'
              };
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h3>Welcome {user.first} {user.last}</h3>
      </div>
    );
  }
}

export default App;
