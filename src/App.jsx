import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="#" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Gabi</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 0.5)}>
          count is {count}
        </button>
        <button onClick={() => setCount((count) => count - 0.3)}>
          count is {count}
        </button>
        <p>
          Criando meu primeiro projeto em React
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App