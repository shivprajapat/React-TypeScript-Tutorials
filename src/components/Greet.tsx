type GreetProps = {
    name: String,
    messageCount: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h1> {props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} urnead message` : "Welcome Guest"}</h1>
        </div>
    )
}