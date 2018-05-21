exports.config = {
  specs: ['dist/bin/test/e2e/*.spec.js'],
  capabilities: {browserName: 'chrome', chromeOptions: {args: ['--no-sandbox']}},
  directConnect: true,
  baseUrl: 'http://localhost:8080/',
  framework: 'jasmine',
  getPageTimeout: 60 * 1000,
  allScriptsTimeout: 60 * 1000,
};
