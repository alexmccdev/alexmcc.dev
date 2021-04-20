import { useState } from 'react'

interface IThemeToggleProps {}

const ThemeToggle: React.FC<IThemeToggleProps> = () => {
    const [theme, setTheme] = useState(
        typeof window !== 'undefined' && localStorage.getItem('theme') == 'light' ? 'light' : 'dark'
    )

    const toggleTheme = () => {
        const html = document.querySelector('html')

        if (!!localStorage.theme && localStorage.getItem('theme') == 'dark') {
            html.classList.remove('dark')
            html.classList.add('light')
            localStorage.setItem('theme', 'light')
            setTheme('light')
        } else {
            html.classList.remove('light')
            html.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setTheme('dark')
        }
    }
    return (
        <span role="btn" aria-label="toggle theme" className="cursor-pointer" onClick={toggleTheme}>
            {theme == 'light' ? '☀️' : '🌙'}
        </span>
    )
}

export default ThemeToggle
