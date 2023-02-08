const path = require("path")
const copyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "index.js",
  },
  mode: "development",
  plugins: [
    new copyWebpackPlugin({
      patterns: [
        {
          from: "./index.html",
          to: "./",
        },
      ],
    }),
  ],
}
