const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log(props)
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      {props.parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
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
