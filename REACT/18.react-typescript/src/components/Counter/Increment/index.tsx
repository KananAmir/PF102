
// interface IncrementProps {
//     count: number,
//     setCount: React.Dispatch<React.SetStateAction<number>>
// }
// const Increment = ({count, setCount}: IncrementProps) => {
//     const handleIncrement = ():string=>{
//         setCount(count + 1)

//         return "Incremented";
//     }
//   return (
//     <button style={{border: "1px solid"}} onClick={handleIncrement}>Increment</button>
//   )
// }

// export default Increment


export interface IncrementProps {
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
}
const Increment:React.FC<IncrementProps> = ({count, setCount}) => {
    const handleIncrement = ():string=>{
        setCount(count + 1)

        return "Incremented";
    }
  return (
    <button style={{border: "1px solid"}} onClick={handleIncrement}>Increment</button>
  )
}

export default Increment

