/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          blue: '#0066cc',
          'blue-light': '#4d94ff',
          'blue-dark': '#004499',
          green: '#00a86b',
          'green-light': '#4dc99b',
          'green-dark': '#007a4f',
          red: '#dc3545',
          'red-light': '#e85d6d',
          'red-dark': '#a02834',
          gray: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a'
          }
        }
      },
      fontFamily: {
        'medical': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      },
      boxShadow: {
        'medical': '0 4px 6px -1px rgba(0, 102, 204, 0.1), 0 2px 4px -1px rgba(0, 102, 204, 0.06)',
        'medical-lg': '0 10px 15px -3px rgba(0, 102, 204, 0.1), 0 4px 6px -2px rgba(0, 102, 204, 0.05)',
        'emergency': '0 4px 6px -1px rgba(220, 53, 69, 0.1), 0 2px 4px -1px rgba(220, 53, 69, 0.06)'
      },
      animation: {
        'pulse-medical': 'pulse-medical 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'typing': 'typing 1.4s infinite ease-in-out',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out'
      },
      keyframes: {
        'pulse-medical': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        'heartbeat': {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.1)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.1)' },
          '70%': { transform: 'scale(1)' }
        },
        'typing': {
          '0%, 80%, 100%': { 
            transform: 'scale(0)',
            opacity: '0.5'
          },
          '40%': { 
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slideUp': {
          '0%': { 
            transform: 'translateY(20px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        },
        'slideDown': {
          '0%': { 
            transform: 'translateY(-20px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateY(0)',
            opacity: '1'
          }
        }
      },
      backgroundImage: {
        'medical-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'health-gradient': 'linear-gradient(135deg, #0066cc 0%, #00a86b 100%)',
        'emergency-gradient': 'linear-gradient(135deg, #dc3545 0%, #fd7e14 100%)'
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
  darkMode: 'class'
}