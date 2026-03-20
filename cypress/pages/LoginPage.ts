export class LoginPage {
  visit() {
    // Pre-check endpoint to avoid flaky first-load failures in CI.
    cy.request({
      url: '/',
      timeout: 120000,
      retryOnStatusCodeFailure: true,
      retryOnNetworkFailure: true,
    });

    cy.visit('/', {
      timeout: 300000,
      retryOnNetworkFailure: true,
      retryOnStatusCodeFailure: true,
      failOnStatusCode: true,
    });

    // Ensure the login page is interactive before continuing.
    cy.get('[data-test=login-button]', { timeout: 180000 }).should('be.visible');
  }
  enterUsername(username: string) {
    cy.get('[data-test=username]').clear().type(username);
  }
  enterPassword(password: string) {
    cy.get('[data-test=password]').clear().type(password);
  }
  clickLogin() {
    cy.get('[data-test=login-button]').click();
  }
  login(username: string, password: string) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
  getErrorMessage() {
    return cy.get('[data-test=error]');
  }
}
export default new LoginPage();
