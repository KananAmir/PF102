import React from 'react'

const ChildB = ({ students }) => {
    console.log(students);

    return (

        <>
            <div>ChildB </div>
            <span>Students Count: {students.length}</span>
        </>

    )
}

export default ChildB