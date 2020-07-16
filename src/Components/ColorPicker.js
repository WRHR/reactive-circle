import React, {Component} from 'react'

export default class ColorPicker extends Component{
    pickColor = event => {
        this.props.setCircleFill(event.target.innerText)
    }

    // turnRed = () => {
    //     this.props.setCircleFill('red')
    // }

    // turnBlue = () => {
    //     this.props.setCircleFill('blue')
    // }

    // turnGreen = () => {
    //     this.props.setCircleFill('green')
    // }

    render(){
        return(
            <>
                <h4>Change the circle's color:</h4>
                <button onClick={this.pickColor}>Red</button>
                <button onClick={this.pickColor}>Blue</button>
                <button onClick={this.pickColor}>Green</button>
            </>
        )
    }
}