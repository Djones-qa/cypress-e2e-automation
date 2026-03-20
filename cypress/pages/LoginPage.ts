export class LoginPage {
  visit() {
    cy.visit('/');
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
