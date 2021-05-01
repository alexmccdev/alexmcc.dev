import { useState, useEffect } from 'react'

interface IThemeToggleProps {}

const ThemeToggle: React.FC<IThemeToggleProps> = () => {
    const [activeTheme, setActiveTheme] = useState('light')
    const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

    useEffect(() => {
        const savedTheme = window.localStorage.getItem('theme')
        savedTheme && setActiveTheme(savedTheme)
    }, [])

    useEffect(() => {
        document.querySelector('html').className = activeTheme
        window.localStorage.setItem('theme', activeTheme)
    }, [activeTheme])

    return (
        <span
            role="btn"
            aria-label="toggle theme"
            className={`cursor-pointer ${activeTheme == 'dark' && 'glow'}`}
            onClick={() => setActiveTheme(inactiveTheme)}
        >
            {activeTheme == 'dark' ? '🌙' : '☀️'}
        </span>
    )
}

export default ThemeToggle
