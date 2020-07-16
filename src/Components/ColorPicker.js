import React from 'react'

export default function SizeSettings(props){
    function changeCX(event){
        props.setCircleX(event.target.value)
        // props.setCircleX(value)
    }

    function changeCY(event){
        props.setCircleY(event.target.value)
    }

    function changeRadius(event){
        props.setRadius(event.target.value)
    }

    return(
        <>
            <h4>Change cicle's size here:</h4>
            <input 
                onChange={changeCX}
                type='number' 
                name='circleX'
                value={props.circleX}
                >
            </input>
            <input 
                onChange={changeCY}
                type='number' 
                name='circleY'
                value={props.circleY}
                >
            </input>
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