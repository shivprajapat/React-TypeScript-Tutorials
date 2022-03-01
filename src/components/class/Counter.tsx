import { Component } from 'react'

type CounterProps = {
    message: string
}
type CounterState = {
    count: number
}

export default class Counter extends Component<CounterProps, CounterState> {
    state = {
        count: 0
    }
    handleChange = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }))
    }
    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleChange}>Increment</button>
                <p>{this.props.message}</p>
            </div>
        )
    }
}
