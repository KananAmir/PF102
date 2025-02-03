
import { Fragment } from 'react'
import './App.css'
import Button from './components/Button'
import Greeting from './components/Greeting'

function App() {

  let userName = "Ruqayya"
  return (
    <>
      <h1>PF102</h1>
      <hr />
      <Greeting />
      <Button />

      <h4>Salam {userName}</h4>

    </>
  )
}

export default App

// jsx - javascript xml
//functional components vs class components


// function sum(a, b) {
//   return a + b
// }

// sum(1, 2)
// sum(1, 5)
// sum(3, 5)