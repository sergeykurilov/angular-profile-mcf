const deps = require('./package.json').dependencies;
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
  output: {
    publicPath: 'http://localhost:4201/',
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
        ProfileModule: './src/app/profile/profile.module.ts',
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
