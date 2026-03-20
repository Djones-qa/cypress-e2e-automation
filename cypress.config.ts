import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    pageLoadTimeout: 300000,
    requestTimeout: 120000,
    responseTimeout: 120000,
    retries: { runMode: 3, openMode: 0 },
  },
});
