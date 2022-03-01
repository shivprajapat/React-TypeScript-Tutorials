import { useContext } from "react"
import { UserContext } from "./UserContext";

export const User = () => {

    const userContext = useContext(UserContext);
    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: "Shiv",
                email: "shiv@gmail.com"
            })
        }
    }
    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User name is <b>{userContext?.user?.name}</b></p>
            <p>User email is <b>{userContext?.user?.email}</b></p>
        </div>
    )
}