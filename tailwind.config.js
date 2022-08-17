/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        handlee: ["'Handlee'", 'cursive'],
      },
      container: {
        center: true,
        screens: {
          lg: '1124px',
          xl: '1124px',
          '2xl': '1124px',
        },
      },
    },
  },

  corePlugins: {
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
  },

  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#baa476',

          secondary: '#dfebe6',

          accent: '#7a8a3a',

          neutral: '#021431',

          'base-100': '#FFFFFF',

          info: '#93E6FB',

          success: '#80CED1',

          warning: '#EFD8BD',

          error: '#E58B8B',
        },
      },
    ],
  },
};
