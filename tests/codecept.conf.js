const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './src/*.js',
  output: './allure-results',
  helpers: {
    REST: {
      endpoint: 'https://trabur.workers.dev'
    },
    JSONResponse: {
      requestHelper: 'REST',
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'tests',
  plugins: {
    "allure": {
      enabled: true
    }
  }
}