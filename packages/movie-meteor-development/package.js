Package.describe({
  name: 'movie-meteor-development',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Development tools for the Movie Meteor project',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
  //debugOnly: true
});

Package.onUse(function (api) {
  api.versionsFrom('1.2.1');
  //noinspection SpellCheckingInspection
  api.use('ecmascript');
  api.addFiles('movieMeteorDevelopment.js');
  api.addFiles('fillDatabaseWithDummyData.js');
});

Package.onTest(function (api) {
  //noinspection SpellCheckingInspection
  api.use('ecmascript');
  //noinspection SpellCheckingInspection
  api.use('tinytest');
  api.use('movie-meteor-development');
  api.addFiles('tests/movieMeteorDevelopment.js');
});
