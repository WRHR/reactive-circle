import React, {Component} from 'react'

export default class SizeSettings extends Component{
    render(){
        return(
            <>
                <h4>Change the circle's radius:</h4>
                <input 
                    //onChange might be good here
                    type='number' 
                    value //maybe give it a value from state
                    >
                </input>
            </>
        )
    }
}