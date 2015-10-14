Package.describe({
  name: "coniel:react-form-handler-reduct-hooks",
  summary: "Reduct reducer/actions for conielo:react-form-handler" ,
  git: 'https://github.com/coniel/meteor-react-form-handler-redux-hooks.git',
  version: "0.1.5"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");

  // Dependencies
  api.use([
      'coniel:react-form-handler@0.1.4'
  ]);

  // Shared files
  api.addFiles([
     'lib/constants.js',
     'lib/form-actions.js',
     'lib/forms-reducer.js',
     'lib/hooks-setup.js'
  ]);
});


Package.onTest(function (api) {
  // api.use("tinytest");
  api.use("coniel:react-form-handler-reduct-hooks");
});
