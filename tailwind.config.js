/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode
        parchment: '#F5E6D3', // Warm beige
        'muted-gold': '#C5A059',
        'forest-green': '#2D4F3C',
        'dark-brown': '#3E2723',
        
        // Dark Mode
        'midnight-blue': '#0F172A', // Deep charcoal/blue
        'moonlight-blue': '#64748B',
        'desaturated-purple': '#7C3AED',
        'soft-white': '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Lora', 'serif'], // Changed from pixel font to Lora for a cozy/professional look
      },
    },
  },
  plugins: [],
}
