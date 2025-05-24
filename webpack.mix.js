// webpack.mix.js
const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .react() // Make sure .react() is here
    .postCss('resources/css/app.css', 'public/css', [
        //
    ])
    // If you had images inside resources, you'd copy them
    // .copyDirectory('resources/images', 'public/images');
    // But since you're putting it directly in public/images, no need for .copyDirectory for this specific case.
    .version(); // Always use .version() for cache busting
