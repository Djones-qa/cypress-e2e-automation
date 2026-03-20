export class LoginPage {
  visit() {
    cy.visit('/practice-test-login/');
  }
  enterUsername(username: string) {
    cy.get('#username').clear().type(username);
  }
  enterPassword(password: string) {
    cy.get('#password').clear().type(password);
  }
  clickLogin() {
    cy.get('#submit').click();
  }
  login(username: string, password: string) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }
  getErrorMessage() {
    return cy.get('#error');
  }
}
export default new LoginPage();
