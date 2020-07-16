import React, {Component} from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker'
import Circle from './Components/Circle'
import StrokeSettings from './Components/StrokeSettings'
import SizeSettings from './Components/SizeSettings'

class App extends Component {

  state= {
    circleX:50,
    circleY:50,
    radius:20,
    stroke:'black',
    strokeWidth:5,
    circleFill:'white'
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
          circleX={this.state.circleX}
          circleY={this.state.circleY}
          radius={this.state.radius}
          stroke={this.state.stroke}
          strokeWidth={this.state.strokeWidth}
          circleFill={this.state.circleFill}
        />
        <div className='properties'>
          <ColorPicker 
            // Props go here
          />
          <SizeSettings
            // pass someprops
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
