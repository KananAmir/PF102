

type IncrementProps = {
    increment: ()=> void
}

const Increment = ({increment}: IncrementProps) => {
  return (
    <button onClick={increment}>Increment</button>
  )
}

export default Increment