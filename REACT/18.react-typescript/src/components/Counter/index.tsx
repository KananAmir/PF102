import { useState } from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";
import IncrementByValue from "./IncrementByValue";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

  return (
    <div>
        <Increment setCount={setCount} count={count} />
        <span>Count: {count}</span>
        <Decrement setCount={setCount} count={count}/>
        <hr />
        <IncrementByValue setCount={setCount} count={count}/>
    </div>
  )
}

export default Counter