import { useRef, useState } from 'react'

function UseRefHook() {

const [state, setState] = useState(0)

console.log("rendering");

  //useRef

  const inputRef = useRef(null)

  let count = useRef(0)

  const handleFocus = ()=>{
    // console.log(inputRef.current); 
    // console.log(inputRef.current.value); 
    inputRef.current.focus()
  }

  return (
    <>
     <input type="text" id='search' placeholder='search' ref={inputRef}/>
     <button onClick={handleFocus}>focus</button>
     <hr />
     <h3>Count: {count.current}</h3>
     <hr />
     <button onClick={()=>{
      count.current++
      console.log(count.current);
  
      
      
     }}>increment</button>

     <hr />
     <button onClick={()=>{setState((prev)=>prev+1)}}>change count state - {state}</button>
    </>
  )
}

export default UseRefHook
