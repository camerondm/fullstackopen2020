import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const MostVoted = ({ votes }) => {
  const max = Math.max.apply(Math, votes)
  const maxVoted = votes.indexOf(max)
  if (max === 0) {
    return (
      <p>No one has voted yet!</p>
    )
  }
  return (
    <p>
      {anecdotes[maxVoted]} has {max} votes.
    </p>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    const newVotesArray = [...votes]
    newVotesArray[selected] += 1
    setVotes(newVotesArray)
  }

  return (
    <div>
      <h1>Your Anecdote of the Day:</h1>
      <p>
        "{props.anecdotes[selected]}" has {votes[selected]} votes
      </p>
      <br></br>
      <button onClick={handleNext}>Next Anecdote</button>
      <button onClick={handleVote}>Vote</button>
      <h2>The Most Voted Anecdote:</h2>
      <MostVoted votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)