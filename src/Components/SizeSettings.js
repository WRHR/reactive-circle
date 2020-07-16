import React from 'react'

export default function SizeSettings(props){
    
    function changeRadius(event){
        props.setRadius(event.target.value)
    }

    return(
        <>
            <h4>Change circle's size here:</h4>
            <input 
                onChange={changeRadius}
                type='number' 
                name='radius'
                value={props.radius}
                >
            </input>
        </>
    )
}