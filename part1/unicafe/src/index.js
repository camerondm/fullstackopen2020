import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({name}) => (
  <h1>{name}</h1>
)

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)
  

const Statistics = ({ good, neutral, bad, allClicks }) => {

  const positiveRatio = () => {
    return ((good / allClicks.length) * 100)
  }

  const averageRating = () => {
    const total = allClicks.reduce((acc,c) => acc + c, 0)
    return total / allClicks.length
  }

  if (allClicks.length === 0) {
    return (
      <p>No Feedback Given</p>
      )
  } else {
    return (
      <table>
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={allClicks.length} />
          <Statistic text="Average" value={averageRating()} />
          <Statistic text="Positive Ratio" value={positiveRatio() + '%'} />
        </tbody>
      </table>
    )
  }
  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodClicks = () => {
    setGood(good + 1)
    setAll(allClicks.concat(1))
  }
  const handleNeutralClicks = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat(0))
  }
  const handleBadClicks = () => {
    setBad(bad + 1)
    setAll(allClicks.concat(-1))
  }


  return (
    <div>
      <Header name="Give Feedback" />
      <Button onClick={handleGoodClicks} text="good" />
      <Button onClick={handleNeutralClicks} text="neutral" />
      <Button onClick={handleBadClicks} text="bad" />
      <Header name="Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)