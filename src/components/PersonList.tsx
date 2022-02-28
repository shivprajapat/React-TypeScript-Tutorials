import React from 'react'
type personListProps = {
    names: {
        first: string,
        last: string
    }[]
}

export default function PersonList(props: personListProps) {
    return (
        <div>
            {
                props.names.map((name) => {
                    return (
                        <p key={name.first}>{name.first} | {name.last}</p>
                    )
                })
            }
        </div>
    )
}
