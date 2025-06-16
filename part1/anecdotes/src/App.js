import { useState } from 'react'

const data = [
  { text: 'Se fazer algo dói, faça isso com mais frequência.', votes: 0 },
  {
    text: 'Contratar mão de obra para um projeto de software que já está atrasado, faz com que se atrase mais ainda!',
    votes: 0,
  },
  {
    text: 'Os primeiros 90% do código correspondem aos primeiros 10% do tempo de desenvolvimento... Os outros 10% do código correspondem aos outros 90% do tempo de desenvolvimento.',
    votes: 0,
  },
  {
    text: 'Qualquer tolo escreve código que um computador consegue entender. Bons programadores escrevem código que humanos conseguem entender.',
    votes: 0,
  },
  { text: 'Otimização prematura é a raiz de todo o mal.', votes: 0 },
  {
    text: 'Antes de mais nada, depurar é duas vezes mais difícil do que escrever o código. Portanto, se você escrever o código da forma mais inteligente possível, você, por definição, não é inteligente o suficiente para depurá-lo.',
    votes: 0,
  },
  {
    text: 'Programar sem o uso extremamente intenso do console.log é o mesmo que um médico se recusar a usar raio-x ou testes sanguíneos ao diagnosticar pacientes.',
    votes: 0,
  },
  { text: 'A única maneira de ir rápido é ir bem.', votes: 0 },
]

export const App = () => {
  const [anecdotes, setAnecdotes] = useState(data)
  const [selected, setSelected] = useState(0)

  const randomAnecdote = () => Math.floor(Math.random() * anecdotes.length)

  const handleSelectNextAnecdotes = () => setSelected(randomAnecdote())

  const incrementVotes = () => {
    const updated = [...anecdotes]
    updated[selected] = {
      ...updated[selected],
      votes: updated[selected].votes + 1,
    }

    setAnecdotes(updated)
  }

  const mostVoted = anecdotes.reduce((max, current) =>
    current.votes > max.votes ? current : max
  )

  return (
    <div>
      <div>
        <p>{anecdotes[selected].text}</p>

        <p>has {anecdotes[selected].votes} votes</p>
      </div>

      <button onClick={incrementVotes}>vote</button>
      <button onClick={handleSelectNextAnecdotes}>next anecdote</button>

      <div>
        <h2>anecdote with most votes</h2>

        <p>{mostVoted.text}</p>
        <p>has {mostVoted.votes} votes</p>
      </div>
    </div>
  )
}
