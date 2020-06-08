import React from 'react'

const Total = (props) => {
    return(
        <p>Number of exercises: {props.course.part[0].exercises + props.course.part[1].exercises + props.course.part[2].exercises}</p>
    )
}

export default Total