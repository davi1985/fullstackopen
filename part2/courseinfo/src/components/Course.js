export const Course = (props) => {
  const { course } = props

  const exercisesTotal = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )

  return (
    <div>
      <h2>{course.name}</h2>

      {course.parts.map((part) => (
        <div key={part.id}>
          <p>
            {part.name} {part.exercises}
          </p>
        </div>
      ))}

      <strong>total of {exercisesTotal} exercises</strong>
    </div>
  )
}
