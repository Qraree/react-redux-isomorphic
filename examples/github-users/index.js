'use strict';

const path = require('path');
const appModulePath = require('app-module-path');
appModulePath.addPath(path.join(__dirname, 'shared'));

require('@babel/register')({
  presets: [
    '@babel/preset-typescript',
    '@babel/env',
    '@babel/react',
  ],

  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
  ],

  extensions: ['.ts', '.tsx', '.js', '.jsx'],
});

const server = require('./server.tsx').default;
const PORT = 3000;

server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});
