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
    strokeWidth:7,
    circleFill:'white'
  }

  setRadius= event =>{
    this.setState({
      radius: event.target.value
    })
  }

  setCircleFill = color => {
    this.setState({
      circleFill: color
    })
  }

  setStrokeWidth= number =>{
    this.setState({
      strokeWidth: number
    })
  }
  
  render(){
    return (
      <div className="App">
        <h2>This app changes the circle's properties!</h2>
        <Circle 
          circleX={this.state.circleX}
          circleY={this.state.circleY}
          radius={this.state.radius}
          stroke={this.state.stroke}
          strokeWidth={this.state.strokeWidth}
          circleFill={this.state.circleFill}
        />
        <div className='properties'>
        <SizeSettings
          radius={this.state.radius}
          setRadius={this.setRadius}
        />
        <ColorPicker 
          setCircleFill={this.setCircleFill}
        />
        <StrokeSettings 
          setStrokeWidth={this.setStrokeWidth}
          strokeWidth={this.state.strokeWidth}
        />
        </div>
      </div>
    );
  }
}

export default App;
