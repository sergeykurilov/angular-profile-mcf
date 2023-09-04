
const deps = require('./package.json').dependencies;
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const publicPath =
  process.env?.["NODE_ENV"] === 'production'
    ? "https://apps-3-6c0f827d185c.herokuapp.com/"
    : "http://localhost:4201/"

module.exports = {
  output: {
    publicPath:  publicPath,
    uniqueName: 'mdmfprofile',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  devServer: {
    port: 4201,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'profile',
      library: { type: 'var', name: 'profile' },
      filename: 'remoteEntry.js',
      exposes: {
        ProfileModule: './src/app/profile/profile.module',
      },
      shared: {
        '@angular/core': { singleton: true, eager: true },
        '@angular/common': { singleton: true, eager: true },
        '@angular/router': { singleton: true, eager: true },
        '@ngxs/store': { singleton: true, eager: true },
      },
    }),
  ],
};
