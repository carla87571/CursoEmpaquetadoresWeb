import html from '@rollup/plugin-html';
import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only';
import image from '@rollup/plugin-image';

export default {
    input:"src/main.js",
    output:{
        file:"dist/bundle.js",
        format:"es",
        sourcemap:true
    },
    plugins:[
        copy({
            targets:[
                
                {src:"src/assets/**/*", dest:"dist/assets"}
            ]
        }),
        css({output:"bundle.css"}),
        html({
            title: 'Rollup Bundle',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            publicPath: './',
            template: ({ attributes, files, meta, publicPath, title }) => {
                return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <link rel="icon" type="image/svg+xml" href="assets/favicon.svg">
    <link rel="icon" type="image/png" href="assets/favicon.png">
    ${files.css.map(file => `<link href="${file.fileName}" rel="stylesheet">`).join('\n    ')}
  </head>
  <body>
    ${files.js.map(file => `<script src="${file.fileName}" type="module"></script>`).join('\n    ')}
  </body>
</html>`;
            }
        }),
        image(),
    ]  

}