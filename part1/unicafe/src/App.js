import { useState } from 'react'

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood((prev) => prev + 1)
  const handleNeutral = () => setNeutral((prev) => prev + 1)
  const handleBad = () => setBad((prev) => prev + 1)

  return (
    <div>
      <h1>Give Feedback</h1>

      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>

      <h1>Statistic</h1>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  )
}
