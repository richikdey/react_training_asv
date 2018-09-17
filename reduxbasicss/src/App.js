import React, { Component } from 'react';
import FeedbackTitle from './containers/FeedbackTitle';
import FeedbackDescription from './containers/FeedbackDescription';


class App extends Component {

  render() {
    return (
      <div >
     <FeedbackTitle />
     <hr></hr>
     <FeedbackDescription />
      </div>
    );
  }
}

export default App;
