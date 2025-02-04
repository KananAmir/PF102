import "./index.css"
const Button = ({ text, className }) => {


    return (
        <button className={className}>{text}</button>
    )
}


export { Button }