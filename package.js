
var npmPackageJson = JSON.parse(process.env.PACKAGE_JSON);

Package.describe({
  name: 'dreid93:recurly-js',
  version: npmPackageJson.version,
  summary: npmPackageJson.description,
  git: npmPackageJson.repository.url,
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles('build/recurly.js', 'client');
});
