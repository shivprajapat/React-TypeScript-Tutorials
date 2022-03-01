import { personProps } from './Person.type'
export default function Person(props: personProps) {
    return (
        <h2>{props.name.first} {props.name.last}</h2>
    )
}
