module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    
  ],
  theme: {
    extend: {
      colors:{
        background: "#faf9f8",
        secbackgorund:"#e4e4e4",
        secoundary:"#040404",
        par: "#aaa",
        btnColor: "#000",
        primarybtn:"#0D3D29",
        green:"#539165",
        pink:"#eb89a6"
      },
      backgroundImage:{
        'women-sweaters': "url('../IMG/sweaters.jpg')",
      },
    },
  },
  plugins: [],
}