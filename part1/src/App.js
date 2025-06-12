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

const Total = ({ exercises1, exercises2, exercises3 }) => {
  console.log({ exercises1, exercises2, exercises3 })
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

export const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'

  const part1 = {
    name: 'Fundamentos da biblioteca React',
    exercises: 10,
  }
  const part2 = {
    name: 'Usando props para passar dados',
    exercises: 7,
  }
  const part3 = {
    name: 'Estado de um componente',
    exercises: 14,
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={{ part1, part2, part3 }} />

      <Total
        exercises1={part1.exercises}
        exercises2={part2.exercises}
        exercises3={part3.exercises}
      />
    </div>
  )
}
