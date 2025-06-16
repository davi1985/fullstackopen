import { useMemo, useState } from 'react'

const StatisticLine = (props) => (
  <p>
    {props.text} {props.value}
  </p>
)

const Button = (props) => (
  <button onClick={props.handleGood}>{props.label}</button>
)

const Statistics = (props) => {
  const noFeedbacks = props.good === 0 && props.neutral === 0 && props.bad === 0

  if (noFeedbacks) {
    return <p>No feedback given</p>
  }

  return (
    <>
      <h1>Statistics</h1>
      <div>
        <StatisticLine value={props.good} text="good" />
        <StatisticLine value={props.neutral} text="neutral" />
        <StatisticLine value={props.bad} text="bad" />
        <StatisticLine value={props.total} text="total" />

        <StatisticLine
          value={props.results.average.toFixed(2)}
          text="average"
        />
        <StatisticLine
          value={`${props.results.positiveFeedback.toFixed(2)}%`}
          text="positive"
        />
      </div>
    </>
  )
}

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood((prev) => prev + 1)
  const handleNeutral = () => setNeutral((prev) => prev + 1)
  const handleBad = () => setBad((prev) => prev + 1)

  const results = useMemo(() => {
    const total = good + neutral + bad
    const emptyTotal = total === 0
    const average = emptyTotal ? 0 : (good - bad) / total
    const positiveFeedback = emptyTotal ? 0 : (good / total) * 100

    return { total, average, positiveFeedback }
  }, [bad, good, neutral])

  return (
    <div>
      <h1>Give Feedback</h1>

      <div>
        <Button label={'good'} onClick={handleGood} />
        <Button label={'neutral'} onClick={handleNeutral} />
        <Button label={'bad'} onClick={handleBad} />
      </div>

      <Statistics bad={bad} good={good} neutral={neutral} results={results} />
    </div>
  )
}
