
const deps = require('./package.json').dependencies;
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const publicPath =
  process.env?.["NODE_ENV"] === 'production'
    ? "https://apps-3-6c0f827d185c.herokuapp.com/"
    : "http://localhost:4201/"
const mf = require('@angular-architects/module-federation/webpack');
const share = mf.share;

const path = require('path');


const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, './tsconfig.json'),
  [/* mapped paths to share */]);

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
      shared: share({
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
        "@angular/router": { singleton: true },
        ...sharedMappings.getDescriptors()
      })
    }),
  ],
};
