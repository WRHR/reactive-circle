import React, {Component} from 'react'

export default class SizeSettings extends Component{
    render(){
        return(
            <>
                <h4>Change circle's size here:</h4>
                <input 
                    onChange={this.props.setRadius}
                    type='number' 
                    name='radius'
                    value={this.props.radius}
                    >
                </input>
            </>
        )
    }
}