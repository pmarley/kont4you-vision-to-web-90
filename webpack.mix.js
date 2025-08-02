const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// Define paths
const sourcePath = 'src';
const distPath = 'dist';

// JavaScript compilation
mix.js(`${sourcePath}/main.tsx`, `${distPath}/js/app.js`)
   .react();

// SCSS compilation
mix.sass(`${sourcePath}/index.css`, `${distPath}/css/app.css`);

// Copy assets
mix.copyDirectory(`${sourcePath}/assets`, `${distPath}/assets`);

// Development settings
if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps();
    
    // BrowserSync for development
    mix.browserSync({
        proxy: 'localhost:5173', // Vite dev server
        files: [
            'src/**/*.tsx',
            'src/**/*.ts',
            'src/**/*.css',
            'wp-content/themes/**/*.php'
        ]
    });
}

// Options
mix.options({
    processCssUrls: false,
    hmrOptions: {
        host: 'localhost',
        port: 8080
    }
});