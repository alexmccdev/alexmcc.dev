const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto Slab', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: colors.coolGray[900],
                secondary: colors.coolGray[100],
                primaryDark: colors.coolGray[100],
                secondaryDark: colors.coolGray[900],
                footer: '#e0e3e8',
                footerDark: '#0e131e',
            },
            maxWidth: (theme) => ({
                ...theme('spacing'),
            }),
            minWidth: (theme) => ({
                ...theme('spacing'),
            }),

            minHeight: (theme) => ({
                ...theme('spacing'),
            }),
            backgroundImage: (theme) => ({
                svg: "url('/layered-peaks.svg')",
                svgDark: "url('/layered-peaks-dark.svg')",
            }),
        },
    },
    variants: {
        extend: {
            translate: ['motion-reduce', 'responsive'],
            animation: ['responsive', 'motion-safe', 'motion-reduce'],
            backgroundImage: ['dark'],
        },
    },
    plugins: [],
}
