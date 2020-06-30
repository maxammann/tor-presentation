const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    index: ['react-hot-loader/patch', './src/index.js'],
    reveal: ['./src/reveal-init.js']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  stats: 'none',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    watchContentBase: true,
    http2: false,
    hot: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
};
