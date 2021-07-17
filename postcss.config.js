const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        require('autoprefixer'),
        purgecss({
            content: ['index.html'],
            safelist: ['show']
        }),
        require('cssnano')({
            preset: 'default',
        })
    ],
};