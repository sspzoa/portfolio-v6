import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        upDown: 'upDown 2s ease-in-out infinite',
      },
      colors: {
        'grayscale-100': 'var(--grayscale-100)',
        'grayscale-200': 'var(--grayscale-200)',
        'grayscale-300': 'var(--grayscale-300)',
        'grayscale-400': 'var(--grayscale-400)',
        'grayscale-500': 'var(--grayscale-500)',
        'grayscale-600': 'var(--grayscale-600)',
        'grayscale-700': 'var(--grayscale-700)',
        'grayscale-800': 'var(--grayscale-800)',
        'grayscale-900': 'var(--grayscale-900)',
        'grayscale-1000': 'var(--grayscale-1000)',
        'primary-brand': 'var(--primary-brand)',
        'primary-negative': 'var(--primary-negative)',
      },
      fontFamily: {
        suit: ['var(--font-suit)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
