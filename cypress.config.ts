import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://practicetestautomation.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    specPattern: 'cypress/e2e/**/*.cy.ts',
    supportFile: 'cypress/support/e2e.ts',
    pageLoadTimeout: 30000,
    defaultCommandTimeout: 10000,
    retries: { runMode: 1, openMode: 0 },
  },
});
