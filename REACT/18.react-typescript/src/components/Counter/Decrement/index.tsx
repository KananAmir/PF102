
interface DecrementProps {
    count: number;
    setCount:  React.Dispatch<React.SetStateAction<number>>;
}

const Decrement:React.FC<DecrementProps> = ({count, setCount}) => {
  return (
    <button style={{border: "1px solid"}}
    onClick={()=>{setCount(count-1)}}
    >Decrement</button>
  )
}

export default Decrement