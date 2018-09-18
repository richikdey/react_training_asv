import React, { Component } from 'react';
import './App.css'
import Chain from './ChainsRattling.wav';
import Pen from './Pen_Clicks.wav';
class App2 extends Component {
  constructor(props){
    super(props);
  this.state={
   playing:false,
   count:0,
   bpm:150,
   beatsPerMeasure:10
  };
  this.Chain = new Audio(Chain);
  this.Pen = new Audio(Pen); 
}
  
  handleBpmChange = event =>{
    const bpm = event.target.value;
    if(this.state.playing){
      clearInterval(this.timer);
      this.timer = setInterval(this.playClick,(60/bpm)*1000 )
      this.setState({
        count:0,
        bpm
      });
  }else{
    this.setState({bpm});
  }
}
 
  startStop =() =>{
    if(this.state.playing){
      clearInterval(this.timer);
      this.setState({
        playing:false
      });
    }else{
      this.timer = setInterval(this.playClick,(60/this.state.bpm)*1000 )
      this.setState({
        count:0,
        playing:true
      },this.playClick)
    }
  }

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;

    if (count % beatsPerMeasure === 0) {
      this.Pen.play();
    } else {
      this.Chain.play();
    }

    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  }
  
  render() {
   const {playing,bpm} = this.state;

    return (
      <div className="BPM">
        <div className="bpm-slider">
        <div>{bpm} BPM</div>
          <input
            type="range"
            min="90"
            max="250"
            value={bpm} 
            onChange={this.handleBpmChange}/>
        </div>
        <button className ="BPM-button2" onClick = {this.startStop}>
          {playing ? 'Music-2 Stop' : 'Music-2 Start'}
        </button>
      </div>
    );
  }
}

export default App2;
