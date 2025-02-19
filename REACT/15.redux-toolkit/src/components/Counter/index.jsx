import { useRef } from "react"
import {useDispatch, useSelector} from "react-redux"
import {increment, decrement, incrementByValue, reset} from "../../redux/features/counterSlice"
const Counter = () => {
    const count = useSelector((state)=>state.counter.value)

    const dispatch = useDispatch()
  
    const inputRef = useRef()
  
    const handleIncrement = ()=>{
      dispatch(increment())
    }
    const handleDecrement = ()=>{
      dispatch(decrement())
    }
    const handleReset = ()=>{
      dispatch(reset())
    }
    const handleInrementByValue = ()=>{
      // console.log(inputRef.current.value);
      const value = Number(inputRef?.current?.value)
      dispatch(incrementByValue(value))
    }
    return (
        <>
            <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={handleIncrement}>inc</button>
                <h3>Count: {count}</h3>
                <button onClick={handleDecrement}>dec</button>
            </div>
            <hr />
            <button onClick={handleReset}>reset</button>
            <div>
                <input type="number" name="" id="" placeholder='enter value' ref={inputRef} />
                <button onClick={handleInrementByValue}>inc by value</button>
            </div>
        </>
    )
}

export default Counter