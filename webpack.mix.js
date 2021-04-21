let mix = require('laravel-mix');
mix.js("src/js/main.js", "js")
    .sass("src/master.scss", "css")
    .setPublicPath('assets/')
    .options({
      processCssUrls: false
});
