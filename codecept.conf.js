const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: 'tests/*_test.ts',
  output: 'test/output',
  helpers: {
    Playwright: {
      url: 'http://localhost:3000',
      show: true,
      waitForNavigation: 'networkidle',
      windowSize: '633x767',
    },
  },
  include: {
    I: './types/steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'spoqa',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
  require: ['ts-node/register'],
};
