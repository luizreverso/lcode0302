// import path from "path"

// const config = {
//     entry: "./index.js",
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: "bundle.js"
//     }
// }

// export default config;

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};