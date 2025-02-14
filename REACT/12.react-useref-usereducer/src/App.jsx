import { useReducer, useState } from 'react'
import './App.css'
import Todo from './components/Todo';
// import UseRefHook from './components/UseRefHook'


const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  SET_INPUT_VALUE: "SET_INPUT_VALUE",
  RESET: "RESET",
  INC_BY_VALUE: "INC_BY_VALUE",

}

function reducer(state, action){
  console.log(action);
  
  switch (action.type) {
    case ACTIONS.INCREMENT:
      
      return {...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return {...state, count: state.count - 1};

    case ACTIONS.RESET:
      return {...state, count: 0, inputValue: ""};

    case ACTIONS.SET_INPUT_VALUE:
      return {...state, inputValue: +action.payload};
      
    case ACTIONS.INC_BY_VALUE:
      return {...state, count: state.count + state.inputValue};

    default:
      return state
  }
}


const initialState = {
  count: 0,
  inputValue: ""
}

function App() {

  // const [count, setCount] = useState(0)
  //useReducer 
  const [state, dispatch] = useReducer(reducer, initialState)

  // const handleIncrement = ()=>{
  //   setCount((prevCount)=>prevCount+1)
  // }
  // const handleDecrement = ()=>{
  //   setCount((prevCount)=>prevCount-1)
  // }
  const handleIncrement = ()=>{
    dispatch({type: ACTIONS.INCREMENT})
  }
  const handleDecrement = ()=>{
    dispatch({type: ACTIONS.DECREMENT})
  }
  const handleIncrementByValue = ()=>{
    dispatch({type: ACTIONS.INC_BY_VALUE})
  }

  return (
    <>
    {/* <UseRefHook/> */}

      <button onClick={handleIncrement}>increment</button>
      <h3>count is {state.count}</h3>
      <button onClick={handleDecrement}>decrement</button>
      <hr />
      <button onClick={()=>{
        dispatch({type: ACTIONS.RESET})
      }}>reset</button>

      <hr />
      <input type="number" 
      value={state.inputValue}
      onChange={(e)=>{
        dispatch({type: ACTIONS.SET_INPUT_VALUE, payload: e.target.value})
      }} />
      <button onClick={handleIncrementByValue}>inc by value</button>


      <hr />

      <Todo/>
    </>
  )
}

export default App
