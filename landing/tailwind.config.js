/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'hover:border-blue-500',
    'hover:border-purple-500',
    'hover:border-cyan-500',
    'hover:shadow-blue-500/10',
    'hover:shadow-purple-500/10',
    'hover:shadow-cyan-500/10',
    'bg-blue-500/20',
    'bg-purple-500/20',
    'bg-cyan-500/20',
    'group-hover:bg-blue-500/30',
    'group-hover:bg-purple-500/30',
    'group-hover:bg-cyan-500/30',
    'text-blue-400',
    'text-purple-400',
    'text-cyan-400',
    'group-hover:text-blue-300',
    'group-hover:text-purple-300',
    'group-hover:text-cyan-300',
    'bg-blue-500/10',
    'bg-purple-500/10',
    'bg-cyan-500/10',
    'group-hover:bg-blue-500/20',
    'group-hover:bg-purple-500/20',
    'group-hover:bg-cyan-500/20',
  ],
  theme: {
    extend: {
      width: {
        '[1200px]': '1200px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        gray: {
          400: '#9ca3af',
          500: '#6b7280',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
        purple: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
      },
    },
  },
  plugins: [],
} 