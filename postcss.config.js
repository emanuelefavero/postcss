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
