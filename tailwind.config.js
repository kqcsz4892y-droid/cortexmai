const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
        dark: {
          100: '#0B0B0F',
          200: '#141421',
          300: '#1E1E2E',
          400: '#28283C',
        }
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0B0B0F 0%, #141421 100%)',
        'gradient-light': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
    fontFamily: {
      sans: ["JetBrains Mono", "Fira Code", "Monaco", "monospace", ...defaultTheme.fontFamily.sans],
      mono: ["JetBrains Mono", "Fira Code", "Monaco", "monospace"],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
