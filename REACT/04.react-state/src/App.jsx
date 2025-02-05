import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import Counter from './components/Counter';
import Users from './components/Users';

function App() {


  // const [user, setUser] = useState("nihad")
  const [user, setUser] = useState({ userName: "nihad" })
  const [cardStatus, setCardStatus] = useState(false)

  console.log("rendering");
  const handleChangeUser = () => {
    // user.userName = "azif"
    // const newUser = { ...user }

    // setUser({ userName: "azif" })
    setUser((prevUser) => {
      return prevUser.userName === "nihad" ? { userName: "azif" } : { userName: "nihad" }
    })
  }

  const showCard = () => {
    setCardStatus(true)
  }
  const hideCard = () => {
    setCardStatus(false)

  }
  // const toggleCard = () => {
  //   if (cardStatus) {
  //     setCardStatus(false)
  //   } else {
  //     setCardStatus(true)
  //   }
  // }
  const toggleCard = () => {
    setCardStatus(!cardStatus)
  }
  return (
    <>
      <h3>Hello {user.userName}</h3>
      <button onClick={handleChangeUser}>change user</button>
      <hr />
      <button onClick={showCard}>Show</button>
      <button onClick={hideCard}>Hide</button>
      <button onClick={toggleCard}>{cardStatus ? "hide" : "show"}</button>

      {cardStatus ? <Card /> : <p>card yoxdur</p>}

      <hr />
      <Counter />

      <hr />
      <Users />
    </>
  )
}

export default App


// hook: useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef