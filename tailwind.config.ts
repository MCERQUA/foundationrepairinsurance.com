import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: { blue: '#2C4A6E', amber: '#D4722A', dark: '#1C1C1E', stone: '#F5F3EF', warm: '#EDEAE5' }
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        body: ['var(--font-source)', 'system-ui', 'sans-serif'],
      },
    }
  },
  plugins: []
}
export default config
