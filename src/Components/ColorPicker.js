import React from 'react'

export default function ColorPicker(props){
   function pickColor(event){
        props.setCircleFill(event.target.innerText)
   }

    return(
        <>
            <h4>Change the circle's color:</h4>
            <button onClick={pickColor}>Red</button>
            <button onClick={pickColor}>Blue</button>
            <button onClick={pickColor}>Green</button>
        </>
    )
}