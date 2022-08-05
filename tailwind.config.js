module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        fontFamily: {
          'display':['"Ubuntu"', '"Roboto Slab"'],
          'body':['"Open Sans"', '"Helvetica"']  ,
        },
        extend: {
            colors: {
                dark: "#101010",
                darklight: "#1c1b1b",
            },
        },
    },
    plugins: [],
};