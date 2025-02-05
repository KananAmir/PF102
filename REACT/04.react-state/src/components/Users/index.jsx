import { useState } from "react";
import { nanoid } from 'nanoid'
import { FaTrashCan } from "react-icons/fa6";
const Users = () => {
    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [age, setAge] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            id: nanoid(8),
            userName: userName,
            email: email,
            age: age
        }

        setUsers([...users, newUser]);
        console.log(users);

        setUserName("")
        setEmail("")
        setAge(0)


    }

    const handleDeleteUser = (id) => {
        // setUsers()
        // const updatedUsers = users.filter((user) => user.id !== id);
        // setUsers(updatedUsers)

        setUsers([...users].filter((user) => user.id !== id))

    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>User Form:</legend>
                    <label htmlFor="username">User Name:</label>
                    <input type="text" id="username" name="username" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                    <br />
                    <br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <br />
                    <br />
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" value={age} onChange={(e) => { setAge(e.target.value) }} />
                    <br />
                    <br />
                    <input type="submit" defaultValue="Submit" />
                </fieldset>
            </form>

            <hr />
            <h3>Users Table</h3>
            {
                users.length > 0 ? (<table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (<tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                            <td><button onClick={() => { handleDeleteUser(user.id) }}>
                                <FaTrashCan />
                            </button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>) : <h4>There is no user yet!</h4>
            }

        </div>
    )
}

export default Users