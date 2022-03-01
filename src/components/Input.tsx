import { ChangeEvent } from "react"

type InputPropa = {
    value: string,
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({ value, handleChange }: InputPropa) {
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event);

    }
    return (
        <input type="text" value={value} onChange={handleChange} />
    )
}
