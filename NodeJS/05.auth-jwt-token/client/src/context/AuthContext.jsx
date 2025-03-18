// import React, { createContext, useState } from 'react'

// export const AuthContext = createContext(null)

// const AuthProvider = ({children}) => {
//     const storedToken = localStorage.getItem("token")
//     const [token, setToken] = useState(storedToken ?? "")
    
//   return (
//     <AuthContext.Provider value={{token, setToken}}>{children}</AuthContext.Provider>
//   )
// }

// export default AuthProvider

import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
