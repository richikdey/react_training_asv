import React, { Component } from 'react';
import DisplayUsers from './container/DisplayUsers';
import DisplayInfo from './container/Displayinfo';


class App extends Component {
  render() {
    return (
      <div>
        <DisplayUsers/>
        <DisplayInfo/>
      </div>
    );
  }
}

export default App;
