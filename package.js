Package.describe({
  name: 'polguixe:meteor-datgui',
  version: '0.5.1_4',
  // Brief, one-line summary of the package.
  summary: 'meteor-datgui is a wrapper for meteor of dat.gui, which is a lightweight controller library ',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/PolGuixe/meteor-datgui',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0');
  api.addFiles('dat.gui.js','client');
  api.export('dat');
});

