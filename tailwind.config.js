const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            'display': ['BenchNine',],
            'body': ['Open Sans'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            greenBright: '#6bb53e',
            //indigo: colors.indigo,
            red: colors.red,
            //yellow: colors.amber,
        },
        backgroundColor: theme => ({
            'greenbright': '#6bb53e',
            white: colors.white,
        }),
    },
    boxShadow: {
        button: '4px 6px 1px 0 rgba(0, 0, 0, 0.05)',
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("tailwindcss-hyphens"),
        require('@tailwindcss/custom-forms'),
    ],
}
