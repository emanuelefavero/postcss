# PostCSS

> This is a cheat sheet repo for PostCSS

PostCSS provides a large ecosystem of plugins to perform different functionalities like linting, minifying, inserting vendor prefixes, and many other things.

> TIP: Remember to change language mode from css or tailwindcss to postcss in vs code for css files (after installing the postcss language support extension)
>
> TIP: This repo is useful for testing new CSS features that are not supported on any browser yet

## Installation

> NOTE: Usually when you use tools such as Vite or Next.js, PostCSS is already installed and configured for you. So you can skip this.

- initialize a new project with `npm init -y`
- install the postcss-cli package as a dev dependency with `npm install postcss postcss-cli`
- define the file structure and setup these two scripts in your `package.json` file

```json
"build:css": "postcss src/style.css -o dist/style.css",
"watch:css": "postcss src/style.css -o dist/style.css -w"
```

- create a src folder and a `style.css` file inside it
- create a dist folder with an `index.html` file inside it that links to the `style.css` file in the dist folder

## Usage

- run `npm run watch:css` to watch for changes in the `style.css` file and compile it to the dist folder
- open the `index.html` file in the browser (or use live-server) to see the changes

## Plugins

PostCSS plugins are used to add new features to PostCSS.

## Install Plugins

- install the plugins you want to use as dev dependencies

```bash
npm install autoprefixer postcss-preset-env precss postcss-import postcss-assets cssnano
```

### Add plugins to your project

- create an empty `postcss.config.js` file in the root of your project
- install the plugins you want to use as dev dependencies
- add the plugins to the `postcss.config.js` file

```js
module.exports = {
  plugins: [
    // Add vendor prefixes to CSS rules using values from Can I Use
    require('autoprefixer'),

    // Use cutting edge CSS features
    require('postcss-preset-env')({
      // Enable all cutting edge features (stage 0 is too risky, better to use stage 1)
      stage: 1,
    }),

    // Use Sass-like syntax
    require('precss'),

    // Import other CSS files
    require('postcss-import'),

    // Manage assets (images etc..)
    require('postcss-assets')({
      // Load images from dist/images
      loadPaths: ['dist/images'],
    }),

    // Minify CSS (output)
    require('cssnano')({
      preset: 'default',
    }),

    // TIP: If you want to read the output CSS file, you can comment out the cssnano Minify CSS plugin for a while
  ],
}
```

> TIP: See the repo src folder to see the plugins in action

## Resources

- [PostCSS](https://postcss.org/)
- [PostCSS Plugins](https://www.postcss.parts/)
- [PostCSS Preset Env](https://preset-env.cssdb.org/)
