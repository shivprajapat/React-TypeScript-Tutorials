type StatusProps = {
    status: string
}
export const Status = (props: StatusProps) => {
    let message
    if (props.status === 'loading') {
        message = "loading..."
    } else if (props.status === 'success') {
        message = "Data fething successfully..."
    }
    else if (props.status === 'error') {
        message = "Error fething data..."
    }
    return (
        <div>
            <h2>Status: {message}</h2>
        </div>
    )
}