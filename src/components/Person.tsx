import React from 'react'
type personProps = {
    name: {
        first: string,
        last: string
    }
}
export default function Person(props: personProps) {
    return (
        <h2>{props.name.first} {props.name.last}</h2>
    )
}
