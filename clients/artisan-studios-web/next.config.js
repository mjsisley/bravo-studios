const path = require("path");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules");

const pageExtensions = ["js", "jsx", "md", "mdx"];

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // Keep plugin lists explicit and empty until a current-compatible
    // plugin is required by authored content.
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

const config = {
  pageExtensions,
  webpack: (webpackConfig) => {
    webpackConfig.resolve.alias.components = path.join(__dirname, "components");
    webpackConfig.resolve.alias.static = path.join(__dirname, "static");
    webpackConfig.resolve.alias.utils = path.join(__dirname, "utils");
    webpackConfig.resolve.alias.content = path.join(__dirname, "content");

    return webpackConfig;
  },
};

module.exports = withPlugins(
  [
    withMDX({
      pageExtensions,
      experimental: {
        mdxRs: true,
      },
    }),
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
  ],
  config
);
