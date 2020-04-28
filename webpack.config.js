const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => ({
  mode: env.prod ? "production" : "development",
  devtool: env.prod ? "source-map" : "cheap-module-eval-source-map",
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
  },
  resolve: {
    extensions: [".ts", ".vue", ".js"],
    alias: {
      // this isn't technically needed, since the default `vue` entry for bundlers
      // is a simple `export * from '@vue/runtime-dom`. However having this
      // extra re-export somehow causes webpack to always invalidate the module
      // on the first HMR update and causes the page to reload.
      vue: "@vue/runtime-dom",
      "@com": path.resolve(__dirname, "./src/component"),
      "@img": path.resolve(__dirname, "./src/img"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@less": path.resolve(__dirname, "./src/less"),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.png$/,
        use: {
          loader: "url-loader",
          options: { limit: 8192 },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { hmr: !env.prod },
          },
          "css-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          !env.prod ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                require("autoprefixer")(),
                require("cssnano")(),
                require("postcss-px-to-viewport")({
                  unitToConvert: "px",
                  viewportWidth: 750,
                  unitPrecision: 3,
                  propList: ["*"],
                  viewportUnit: "vw",
                  fontViewportUnit: "vw",
                  selectorBlackList: [],
                  minPixelValue: 1,
                  mediaQuery: false,
                  replace: true,
                  exclude: /(\/|\\)(node_modules)(\/|\\)/,
                }),
              ],
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: "minimal",
    contentBase: __dirname,
    overlay: true,
    proxy: {
      "/api": {
        target: "http://localhost:7001",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "", // 重写path
        },
        secure: true, // 设置支持https协议的代理
      },
    },
  },
});
