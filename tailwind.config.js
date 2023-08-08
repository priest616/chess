/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx,ts,tsx}"],
  theme: {
    screens: {
      '2xsm': '100px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',    },
  
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
        container: {
          center: true,
          padding: "1rem",
          screens: {
            sm: "100%",
            md: "100%",
            lg: "800px",
            xl: "1200px",
          },
      },
    },
  },
  plugins: [],
}

