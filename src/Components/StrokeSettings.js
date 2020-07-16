import React from 'react'

export default function StrokeSettings(props){
    function addStroke(){
        props.setStrokeWidth(props.strokeWidth + 1)
    }
    function subStroke(){
        props.setStrokeWidth(props.strokeWidth - 1)
    }

    return(
        <>
        <h4>Change the stroke width here:</h4>
        <button onClick={addStroke}>+</button>
        <button onClick={subStroke}>-</button>
        </>
    )
}