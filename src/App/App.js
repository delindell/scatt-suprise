import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div classNam="App">
        <h2>Inside App COMPONENT</h2>
        <button className="btn btn-primary">I am a button that doesn't work</button>
      </div>
    );
  }
}

export default App;
