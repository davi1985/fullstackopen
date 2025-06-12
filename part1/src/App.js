const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part, exercisesNumber }) => (
  <p>
    {part} {exercisesNumber}
  </p>
)

const Content = ({ parts }) => (
  <>
    <Part part={parts.part1} exercisesNumber={parts.exercises1} />
    <Part part={parts.part2} exercisesNumber={parts.exercises2} />
    <Part part={parts.part3} exercisesNumber={parts.exercises3} />
  </>
)

const Total = ({ exercises1, exercises2, exercises3 }) => (
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
)

export const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado do componente'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content
        parts={{ part1, part2, part3, exercises1, exercises2, exercises3 }}
      />

      <Total
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
    </div>
  )
}
