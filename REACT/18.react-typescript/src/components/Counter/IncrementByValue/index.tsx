import React, { useRef } from 'react'
import { IncrementProps } from '../Increment'


const IncrementByValue:React.FC<IncrementProps> = ({count, setCount}) => {

    const inputRef = useRef<HTMLInputElement | null>(null)

    const handleIncByValue = ()=>{
        if(inputRef.current){
            const value = parseInt(inputRef.current?.value) 
            setCount(count + value)
        }
    }
  return (
    <div>
        <input type="number" ref={inputRef}/>
        <button onClick={handleIncByValue}>Increment by Value</button>
    </div>
  )
}

export default IncrementByValue