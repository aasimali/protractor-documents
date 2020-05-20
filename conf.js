exports.config = {

  directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      './chapter10_steps.js',
      './env.js'
    ],

  },

  specs: [
    './chapter10.feature'
  ],
  onPrepare: function () {
          browser.driver.manage().window().maximize();
        },
      }