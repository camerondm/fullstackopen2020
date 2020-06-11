import React from 'react';

const Header = ({ title }) => (
    <h1>{ title }</h1>
)


const Part = ({ part }) => (
    <p>{part.name} {part.exercises}</p>
)


const Content = ({ parts }) => {
    return (
        parts.map((part)=>
            <Part key = {part.id} part = {part} />
        )
    )
}

const Total = ({ parts }) => {
    const total = parts.reduce((acc, part) => acc += part.exercises, 0)

    return (
        <p style={{fontWeight: "bold"}}>Number of exercises {total}</p>
    )
}

  const Course = ({ course }) => {
      return (
        <div>
            <Header title = {course.name} />
            <Content parts = {course.parts}/>
            <Total parts = {course.parts} />
        </div>
      )
  }

export default Course;