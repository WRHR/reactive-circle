import React from 'react'

export default function Circle(props){
    return(
        <svg width={props.circleX * 2} height={props.circleY *2}>
            <circle 
                cx={props.circleX} 
                cy={props.circleY} 
                r={props.radius} 
                stroke={props.stroke}
                strokeWidth={props.strokeWidth}
                fill={props.circleFill}
            />
        </svg>
    )
}