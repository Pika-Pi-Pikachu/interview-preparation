/* eslint-disable @typescript-eslint/no-require-imports */
// import type { Config } from 'tailwindcss';

// const config: Config = {
//   darkMode: ['class'],
//   content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './components/**/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
//   theme: {
//     extend: {
//       backgroundImage: {
//         'main-gradient-r': 'linear-gradient(to right, #030712, #1e2939)',
//         'main-gradient-l': 'linear-gradient(to left, #030712, #1e2939)',
//         'main-gradient-t': 'linear-gradient(to top, #030712, #1e2939)',
//         'main-gradient-b': 'linear-gradient(to bottom, #030712, #1e2939)',
//       },

//       keyframes: {
//         slide: {
//           from: { transform: 'translateX(100%)' },
//           to: { transform: 'translateX(0%)' },
//         },
//         appear: {
//           from: { opacity: '0', transform: 'translateY(4rem)' },
//           to: { opacity: '1', transform: 'translateY(0)' },
//         },

//       },
//       animation: {
//         slide: 'slide 750ms ease-in-out',
//         appear: 'appear 750ms ease-in-out',

//       },
//     },
//   },
//   plugins: [require('tailwindcss-animate')],
// };
// export default config;



import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* 🔹 Mona Sans font setup */
      fontFamily: {
        sans: ['Mona Sans', 'Mona Sans Fallback', 'sans-serif'],
      },

      /* 🔹 Font weights and custom typography scale */
      fontWeight: {
       light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
        extrabold: "800",
      },
      fontSize: {
        'heading-xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 48px
        'heading-lg': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 32px
        'heading-md': ['1.5rem', { lineHeight: '1.3' }], // 24px
        'body-lg': ['1.125rem', { lineHeight: '1.75' }], // 18px
        'body-base': ['1rem', { lineHeight: '1.6' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5' }], // 14px
      },

      /* 🔹 Keep your existing gradients */
      backgroundImage: {
        'main-gradient-r': 'linear-gradient(to right, #030712, #1e2939)',
        'main-gradient-l': 'linear-gradient(to left, #030712, #1e2939)',
        'main-gradient-t': 'linear-gradient(to top, #030712, #1e2939)',
        'main-gradient-b': 'linear-gradient(to bottom, #030712, #1e2939)',
      },

      /* 🔹 Keep your animations */
      keyframes: {
        slide: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0%)' },
        },
        appear: {
          from: { opacity: '0', transform: 'translateY(4rem)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        slide: 'slide 750ms ease-in-out',
        appear: 'appear 750ms ease-in-out',
      },

       gridTemplateColumns: {
        // custom auto-fit grid
        'auto-fit': 'repeat(auto-fit, minmax(250px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;

