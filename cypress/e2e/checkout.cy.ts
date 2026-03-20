import LoginPage from '../pages/LoginPage';

describe('Logged In Area', () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login('student', 'Password123');
    cy.url().should('include', 'logged-in-successfully');
  });

  it('should show success heading after login', () => {
    cy.get('h1').should('contain', 'Logged In Successfully');
  });

  it('should show congratulations message', () => {
    cy.get('p').should('contain', 'Congratulations');
  });

  it('should have a log out button', () => {
    cy.contains('Log out').should('be.visible');
  });

  it('should log out successfully', () => {
    cy.contains('Log out').click();
    cy.url().should('include', 'practice-test-login');
  });

  it('should not access logged in page without login', () => {
    cy.visit('/logged-in-successfully/');
    cy.get('h1').should('be.visible');
  });
});
