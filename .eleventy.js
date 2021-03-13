const htmlmin = require("html-minifier");
const svgContents = require("eleventy-plugin-svg-contents");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  // Custom files
  eleventyConfig.addWatchTarget("./_tmp/style.css");

  // Passthroughs
  eleventyConfig.addPassthroughCopy("./node_modules/pixelarticons/svg");
  eleventyConfig.addPassthroughCopy({"./_tmp/style.css": "./style.css"});
  eleventyConfig.addPassthroughCopy({"./node_modules/clipboard/dist/clipboard.min.js": "./js/clipboard.js"});
  eleventyConfig.addPassthroughCopy("favicon.svg");

  eleventyConfig.addPlugin(svgContents);

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });
};
