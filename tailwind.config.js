/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'carolo-blue': '#0B3D91',
        'carolo-dark': '#071B3A',
        'carolo-accent': '#2563EB',
        'carolo-light': '#F7F9FC',
        'carolo-text': '#111827',
        'whatsapp': '#25D366',
        'whatsapp-dark': '#1EBE57',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 61, 145, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(11, 61, 145, 0.16), 0 4px 12px -2px rgba(0, 0, 0, 0.08)',
        'whatsapp': '0 4px 20px rgba(37, 211, 102, 0.4)',
      },
    },
  },
  plugins: [],
}
