import React from 'react'

export default function Circle(props){
    return(
        <svg 
            width={(props.circle.radius + props.circle.strokeWidth) * 2} 
            height={(props.circle.radius + props.circle.strokeWidth) * 2}>
            <circle 
                cx={props.circle.radius + props.circle.strokeWidth} 
                cy={props.circle.radius + props.circle.strokeWidth} 
                r={props.circle.radius} 
                stroke={props.circle.stroke}
                strokeWidth={props.circle.strokeWidth}
                fill={props.circle.circleFill}
            />
        </svg>
    )
}