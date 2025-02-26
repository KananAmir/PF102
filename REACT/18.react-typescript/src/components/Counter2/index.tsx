import  { useState } from 'react'
import Increment from './Increment'
import Decrement from './Decrement'
import Reset from './Reset'

const Counter2 = () => {
    const [count, setCount] = useState<number>(0)
    const increment = ()=>{
        setCount((prevCount)=>prevCount+1)
    }
    const decrement = ()=>{
        setCount((prevCount=>prevCount-1))
    }
    const reset = ()=>{
        setCount(0)
    }

  return (
    <div>
        <Increment increment={increment}/>
        {count}
        <Decrement decrement={decrement}/>
        <hr />
        <Reset reset={reset}/>
    </div>
  )
}

export default Counter2