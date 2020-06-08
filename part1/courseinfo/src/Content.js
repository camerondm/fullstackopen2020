import React from 'react'

import Part from './Part'

const Content = (props) => {
    return (
        <div>
            <Part part={props.course.part[0].name} exercises={props.course.part[0].name}/>
            <Part part={props.course.part[1].name} exercises={props.course.part[1].name}/>
            <Part part={props.course.part[2].name} exercises={props.course.part[2].name}/>
        </div>
    )
}

export default Content