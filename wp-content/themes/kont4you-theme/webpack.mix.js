const mix = require('laravel-mix');

mix.options({
    publicPath: 'assets'
});

mix.js('resources/js/app.js', 'assets/js');

mix.sass('resources/sass/app.scss', 'assets/css')
.options({
    processCssUrls: false
});

mix.browserSync({
    proxy: 'http://kont4you.local',
    files: [
        './**/*.php',
        './assets/js/*.js',
        './assets/css/*.css',
    ]
});