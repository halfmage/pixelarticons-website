const htmlmin = require("html-minifier");
const svgContents = require("eleventy-plugin-svg-contents");
const pluginIcons = require('eleventy-plugin-icons');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  // Custom files
  eleventyConfig.addWatchTarget("./_tmp/style.css");

  // Alpine JS
  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/cdn.min.js': './js/alpine.js',
  })

  // Passthroughs
  eleventyConfig.addPassthroughCopy("social.png");
  eleventyConfig.addPassthroughCopy("./node_modules/pixelarticons/svg");
  eleventyConfig.addPassthroughCopy("./fonts");
  eleventyConfig.addPassthroughCopy({"./_tmp/style.css": "./style.css"});
  eleventyConfig.addPassthroughCopy({"./node_modules/clipboard/dist/clipboard.min.js": "./js/clipboard.js"});
  eleventyConfig.addPassthroughCopy("favicon.svg");

  eleventyConfig.addPlugin(svgContents);

  eleventyConfig.addPlugin(pluginIcons, {
    sources: [{ name: 'icon', path: 'node_modules/pixelarticons/svg' }],
  });

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
  })
  
  return {
    htmlTemplateEngine: "njk"
  };
};
