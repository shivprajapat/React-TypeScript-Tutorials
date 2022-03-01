import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div>
            <h4 style={{
                backgroundColor: theme.primary.main,
                color: theme.primary.text
            }}>Primary</h4>
            <h4 style={{
                backgroundColor: theme.secondary.main,
                color: theme.secondary.text
            }}>Secondary</h4>
        </div>
    )
}