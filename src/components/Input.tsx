import { ChangeEvent } from "react"

type InputPropa = {
    value: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function Input(props: InputPropa) {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event);

    }
    return (
        <input type="text" value={props.value} onChange={handleInputChange} />
    )
}
