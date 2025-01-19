/* eslint-disable react/prop-types */

import { createContext } from "react"

const AuthContext = createContext()

export function AuthProvider(props){
    const { children, value } = props

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
