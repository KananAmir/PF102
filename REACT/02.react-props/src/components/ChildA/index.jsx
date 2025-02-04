import ChildB from "../ChildB"

const ChildA = ({ students }) => {
    return (
        <div>ChildA

            <h3><ChildB students={students} /></h3>
        </div>
    )
}


export default ChildA