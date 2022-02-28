type GreetProps = {
    name: String,
    num: number
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h1>Welcome {props.name}! You have {props.num} urnead message</h1>
        </div>
    )
}