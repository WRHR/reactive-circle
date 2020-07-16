import React, {useState} from 'react';
import './App.css';
import ColorPicker from './Components/ColorPicker'
import Circle from './Components/Circle'
import StrokeSettings from './Components/StrokeSettings'
import SizeSettings from './Components/SizeSettings'

function App() {
  const [circleX, setCircleX] = useState(50)
  const [circleY, setCircleY] = useState(50)
  const [radius, setRadius] = useState(40)
  const [stroke] = useState('black')
  const [strokeWidth, setStrokeWidth] = useState(7)
  const [circleFill, setCircleFill] = useState('white')

  return (
    <div className="App">
      <h2>This App changes the circle's color!</h2>
      <Circle 
        circleX={circleX}
        circleY={circleY}
        radius={radius}
        stroke={stroke}
        strokeWidth={strokeWidth}
        circleFill={circleFill}
      />
      <SizeSettings 
        circleX={circleX}
        circleY={circleY}
        radius={radius}
        setCircleX={setCircleX}
        setCircleY={setCircleY}
        setRadius={setRadius}
      />
      <ColorPicker 
        setCircleFill={setCircleFill}
      />
      <StrokeSettings 
        setStrokeWidth={setStrokeWidth}
        strokeWidth={strokeWidth}
      />
    </div>
  );
}

export default App;