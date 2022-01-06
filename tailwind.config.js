const { LibManifestPlugin } = require("webpack");

module.exports = {
  content: [
    "./src/**/*.{js, css}",
  ],
  theme: {
    extend: {},
    colors: {
      'champagnePink': '#EDDCD2',
      'linen': '#FFF1E6',
      'palePink': '#FDE2E4',
      'mimiPink': '#FAD2E1',
      'powderBlue': '#C5DEDD',
      'mintCream': '#DBE7E4',
      'isabelline': '#F0EFEB',
      'aliceBlue': '#D6E2E9',
      'beauBlue': '#BCD4E6',
      'paleCerulean': '#99C1DE',
    }
  },
  plugins: [],
}
