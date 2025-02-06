
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Books from './components/Books'

// useEffect
//mounting (yaranma)
//updating (güncelleme)
//unmounting (yoxa çıxma / silinmə)
function App() {
  const [showCard, setShowCard] = useState(false)


  return (
    <>
      <h1>Hi, React</h1>

      <button onClick={() => {
        setShowCard(!showCard)

      }}>Toggle Card</button>
      <br />
      <br />
      {
        showCard && <Card />
      }
      <hr />
      <Books />
    </>
  )
}

export default App
