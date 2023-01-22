// eslint-disable-next-line no-undef
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
    entry:"./src/index.js",
    output: {
        filename: "main.js",
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
}