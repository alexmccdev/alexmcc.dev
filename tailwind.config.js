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
                accentPrimary: colors.amber[400],
                accentSecondary: colors.blue[100],
                primaryDark: colors.coolGray[100],
                secondaryDark: colors.coolGray[900],
                accentPrimaryDark: colors.amber[600],
                accentSecondaryDark: colors.blue[100],
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
        },
    },
    variants: {
        extend: {
            translate: ['motion-reduce', 'responsive'],
            animation: ['responsive', 'motion-safe', 'motion-reduce'],
        },
    },
    plugins: [],
}
