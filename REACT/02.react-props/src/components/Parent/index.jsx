import React from 'react'
import ChildA from '../ChildA'

const Parent = () => {
    const students = ["miri", "gunel", "farid"]

    return (
        <div>Parent

            <h3><ChildA students={students} /></h3>
        </div>
    )
}

export default Parent