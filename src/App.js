import React, {Component} from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker'
import Circle from './Components/Circle'
import StrokeSettings from './Components/StrokeSettings'
import SizeSettings from './Components/SizeSettings'

class App extends Component {

  state= {
    circle:{
      radius:20,
      stroke:'black',
      strokeWidth:5,
      circleFill:'white'
    },
    buttons:{
      button1: 'Red',
      button2: 'Blue',
      button3: 'Green',
    }
  }

  setCircleFill = () => {
    
  }

  setRadius= () =>{
   
  }

  setStrokeWidth= () =>{

  }
  
  render(){
    return (
      <div className="App">
        <h2>Change this circle's properties:</h2>
        <Circle 
          // radius={this.state.circle.radius}
          // stroke={this.state.circle.stroke}
          // strokeWidth={this.state.circle.strokeWidth}
          // circleFill={this.state.circle.circleFill}
          circle={this.state.circle}
        />
        <div className='properties'>
          <ColorPicker 
            // Props go here
          />
          <SizeSettings
            // pass some props
          />
          <StrokeSettings 
            // even more props
          />
        </div>
      </div>
    );
  }
}

export default App;
