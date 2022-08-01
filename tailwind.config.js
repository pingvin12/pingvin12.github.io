module.exports = {
    darkMode: 'class',
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
          'display':['"Ubuntu"', '"Roboto Slab"'],
          'body':['"Open Sans"', '"Helvetica"']  ,
        },
        extend: {
            colors: {
                dark: "#101010",
            },
        },
    },
    plugins: [],
};