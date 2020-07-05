const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "./JS/index.min.js"
  },
 
  devServer: {
    contentBase: "./src",
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "buble-loader",
            options: {
              include: path.join(__dirname, "src"),
              objectAssign: "Object.assign",
            },
          },
          {
            loader: "eslint-loader",
            options: {
              formatter: require("eslint-friendly-formatter"),
            },
          },
        ],
      },
      {
        test: /\.styl$/,
        use: [
          "css-hot-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "postcss-loader",
          "stylus-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          "css-hot-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10000,
              name: "./public/images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "./CSS/[name].min.css",
    }),
    new TerserPlugin({
      test: /\.js(\?.*)?$/i,
    }),
    new CopyPlugin({
      patterns: [{ from: "public/assets", to: "public/assets" }],
    }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
  ],
};