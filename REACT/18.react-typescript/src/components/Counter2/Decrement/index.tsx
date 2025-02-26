
type DecrementProps = {
    decrement: () => void;
}
const Decrement = ({decrement}: DecrementProps) => {
  return (
    <button onClick={decrement}>decrement</button>
  )
}

export default Decrement