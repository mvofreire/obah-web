const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        test: /node_modules/,
        minSize: '50000',
        name: "vendors"
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules|dist|.storybook/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        loader: "less-loader", // compiles Less to CSS
        options: {
          modifyVars: {
            "primary-color": "red",
            "link-color": "blue",
            "border-radius-base": "2px"
          },
          javascriptEnabled: true
        }
      }
    ]
  },
  devServer: {
    contentBase: "src",
    historyApiFallback: true
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      application: path.resolve(__dirname, "src/application/"),
      pages: path.resolve(__dirname, "src/application/pages"),
      config: path.resolve(__dirname, "src/config/"),
      services: path.resolve(__dirname, "src/services/"),
      contexts: path.resolve(__dirname, "src/contexts/"),
      util: path.resolve(__dirname, "src/util/")
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: "./template/index.html",
      filename: "./index.html"
    })
  ]
};
