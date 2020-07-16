import React, {Component} from 'react'

export default class ColorPicker extends Component{
    turnRed = () => {
        this.props.setCircleFill('red')
    }

    turnBlue = () => {
        this.props.setCircleFill('blue')
    }

    turnGreen = () => {
        this.props.setCircleFill('green')
    }

    render(){
        return(
            <>
                <h4>Change the circle's color:</h4>
                <button onClick={this.turnRed}>Red</button>
                <button onClick={this.turnBlue}>Blue</button>
                <button onClick={this.turnGreen}>Green</button>
            </>
        )
    }
}