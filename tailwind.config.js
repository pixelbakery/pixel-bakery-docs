module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/globals.css',
    './theme.config.js',
    './pages/**/*.md',
    './pages/**/*.mdx',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      cream: 'rgb(239, 232, 242)', //#EFE8F2},
      white: '#ffffff',
      egg: 'rgb(243, 244, 246)',
      blue: {
        light: 'rgb(204, 238, 255)',
        DEFAULT: 'rgb(56, 204, 255)',
        dark: 'rgb(0, 81, 116)',
      },
      peach: {
        light: '#FFD9D3',
        DEFAULT: 'rgb(255, 94, 100)',
      },
      yellow: 'rgb(250, 216, 105)',
      pink: {
        extralight: '#FFEFFF',
        light: 'rgb(241, 231, 243)',
        DEFAULT: 'rgb(255, 163, 204)', //#F2A8CA
      },
      wine: {
        100: 'rgb(210, 207, 218)',
        200: 'rgb(182, 180, 190)',
        300: 'rgb(155, 153, 163)',
        400: 'rgb(129, 127, 137)',
        500: 'rgb(104, 102, 111)',
        DEFAULT: 'rgb(80, 78, 87)', //#504E57
      },
    },
    extend: {},
  },
  plugins: [],
}
