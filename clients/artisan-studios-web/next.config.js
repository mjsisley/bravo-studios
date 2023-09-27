const path = require("path");

// dotenv deps
// require("dotenv").config();
// const Dotenv = require("dotenv-webpack");
// const withDotenv = require("next-runtime-dotenv");

// image hashing/colocation deps
// const withImages = require("next-images");

// Compose Plugins
const withPlugins = require("next-compose-plugins");

// Add progress to cli
// const withProgressBar = require("next-progressbar");

// Add pino logger
// const withPino = require("next-pino");

// Add graphql files
// const withGraphql = require("next-plugin-graphql");

const withTM = require("next-transpile-modules");

// const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
// const withSourceMaps = require("@zeit/next-source-maps")({
  // devtool: "hidden-source-map",
// });
// const withSize = require("next-size");

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})

// mdx setup deps
// const images = require("remark-images");
// const emoji = require("remark-emoji");
// const withMDX = require("@zeit/next-mdx")({
//   options: {
//     mdPlugins: [images, emoji],
//   },
//   extension: /\.(md|mdx)$/,
// });

const config = {
  pageExtensions: ["page.js"],
  webpack: (config, options) => {
    // Absolute Import Setup
    config.resolve.alias["components"] = path.join(__dirname, "components");
    config.resolve.alias["static"] = path.join(__dirname, "static");
    config.resolve.alias["utils"] = path.join(__dirname, "utils");

    // Hack to pull vendor modules into commons. Potentially better to stick to the default and resend modules on each route.
    // Uncomment out to reduce modules attached on each route
    // if (!options.isServer) {
    //   config.optimization.splitChunks.cacheGroups = makeModulesCommon(config);
    // }

    return config;
  },
};

// Setup dotenv config
// const withConfig = withDotenv({
//   path: path.join(__dirname, ".env"),
//   public: ["MY_API_URL", "TEST"],
//   server: ["GITHUB_TOKEN"],
// });

const makeModulesCommon = (config) => {
  const cacheGroups = config.optimization.splitChunks.cacheGroups;

  delete cacheGroups.react;

  cacheGroups.default = false;

  cacheGroups.vendors = {
    name: "vendors",
    test: /[\\/](node_modules|packages)[\\/]/,
    enforce: true,
    priority: 20,
  };

  cacheGroups.commons = {
    name: "commons",
    minChunks: 2,
    priority: 10,
  };
  return cacheGroups;
};

// const bundleAnalyzerSetup = [
//   withBundleAnalyzer,
//   {
//     analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
//     analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
//     bundleAnalyzerConfig: {
//       server: {
//         analyzerMode: "static",
//         reportFilename: "../bundles/server.html",
//       },
//       browser: {
//         analyzerMode: "static",
//         reportFilename: "../bundles/client.html",
//       },
//     },
//   },
// ];

// module.exports = withConfig(
  module.exports =
  withPlugins(
    [
      withMDX({
        pageExtensions: ['js', 'jsx', 'md', 'mdx'],
      experimental: {
        mdxRs:true,
      }}),
      
      [
        withTM,
        {
          transpileModules: [
            "react-dnd-html5-backend",
            "react-dnd",
            "dnd-core",
            "three/examples/jsm/loaders/GLTFLoader",
          ],
        },
      ],
      // withGraphql,
      // withImages,
      //   withSourceMaps,
      // withProgressBar,
      // withPino,
      // bundleAnalyzerSetup,
      // withSize,
    ],
    config
  )
// );
