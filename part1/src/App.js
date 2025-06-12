const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.part} {props.exercisesNumber}
    </p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part={props.parts.part1} exercisesNumber={props.parts.exercises1} />
      <Part part={props.parts.part2} exercisesNumber={props.parts.exercises2} />
      <Part part={props.parts.part3} exercisesNumber={props.parts.exercises3} />
    </>
  )
}

const Total = ({ parts }) => {
  console.log({ parts })
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return <p>Number of exercises {total}</p>
}

export const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'

  const parts = [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10,
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7,
    },
    {
      name: 'Estado de um componente',
      exercises: 14,
    },
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />

      <Total parts={parts} />
    </div>
  )
}
