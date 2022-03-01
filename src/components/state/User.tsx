import { useState } from 'react'
type AuthUser = {
    name: string,
    email: string
}
export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: "Shiv",
            email: "shiv@gmail.com"
        })
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <h2>User name is {user?.name}</h2>
            <h2>User email is {user?.email}</h2>
        </div>
    )
}