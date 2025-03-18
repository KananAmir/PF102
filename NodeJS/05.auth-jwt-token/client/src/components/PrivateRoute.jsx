import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { jwtDecode } from "jwt-decode";


const PrivateRoute = ({roles}) => {

    const { token } = useContext(AuthContext)
    const decoded = jwtDecode(token);

    console.log(decoded);
    
    if (!token) {
        return <Navigate to="/login" />
    }
    return (
        <>
            {roles.includes(decoded.role) ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default PrivateRoute