
type ResetProps = {
    reset: ()=>void
}
const Reset = ({reset}: ResetProps) => {
  return (
    <button onClick={reset}>reset</button>
  )
}

export default Reset