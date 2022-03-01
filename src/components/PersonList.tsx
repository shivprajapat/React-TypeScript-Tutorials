import { Name } from './Person.type'
type personListProps = {
    names: Name[]
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
