import React, {Component} from 'react'

export default class StrokeSettings extends Component{
    addStroke = () => {
        this.props.setStrokeWidth(this.props.strokeWidth + 1)
    }
    subStroke = () => {
        this.props.setStrokeWidth(this.props.strokeWidth - 1)
    }
    
    render(){
        return(
            <>
            <h4>Change the stroke width here:</h4>
            <button onClick={this.addStroke}>+</button>
            <button onClick={this.subStroke}>-</button>
            </>
        )
    }
}