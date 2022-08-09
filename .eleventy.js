const eleventySass = require("eleventy-sass");

module.exports = eleventyConfig => {

  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Eleventy Sass.
  eleventyConfig.addPlugin(eleventySass);

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      data: '_data',
    },
    passthroughFileCopy: true
  };
};
