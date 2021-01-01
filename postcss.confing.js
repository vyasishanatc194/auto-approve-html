const tailwindcss = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.confing.js"),
    cssnano({
      preset: 'default',
    }),
    purgecss({
      content: ['./html/*.html'], 
      extractors: [
        {
          extractor: class TailwindExtractor {
            static extract() {
              return content.match(/[A-z0-9-:|/]+/g) || [];
            }
          },
          extensions: ['css', 'html']
        }
      ]
    }),
    autoprefixer
  ]
};
