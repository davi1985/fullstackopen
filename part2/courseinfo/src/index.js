import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App'

const notes = [
  {
    id: 1,
    content: 'HTML é fácil',
    important: true,
  },
  {
    id: 2,
    content: 'O navegador só pode executar JavaScript',
    important: false,
  },
  {
    id: 3,
    content: 'GET e POST são os métodos mais importantes do protocolo HTTP',
    important: true,
  },
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App notes={notes} />
  </React.StrictMode>
)
