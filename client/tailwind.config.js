/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('./Images/bgg1.png')",
        car: "url('./Images/car.jpg')",
        arch: "url('./Images/arch.jpg')",
        human: "url('./Images/human.jpg')",
        electronics: "url('./Images/electronics.webp')",
        music: "url('./Images/music.jpg')",
        bio: "url('./Images/bio.jpg')",
        weapon: "url('./Images/weapon.jpg')",
        robot: "url('./Images/robot.avif')",
        arrow: "url('./Images/arrow1.png')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')    
  ],
}