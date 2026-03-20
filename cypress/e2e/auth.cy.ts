import LoginPage from '../pages/LoginPage';

describe('Authentication', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    LoginPage.login('student', 'Password123');
    cy.url().should('include', 'logged-in-successfully');
    cy.get('h1').should('contain', 'Logged In Successfully');
  });

  it('should show error for invalid username', () => {
    LoginPage.login('wronguser', 'Password123');
    LoginPage.getErrorMessage().should('contain', 'Your username is invalid!');
  });

  it('should show error for invalid password', () => {
    LoginPage.login('student', 'wrongpassword');
    LoginPage.getErrorMessage().should('contain', 'Your password is invalid!');
  });

  it('should show error for empty username', () => {
    LoginPage.enterPassword('Password123');
    LoginPage.clickLogin();
    LoginPage.getErrorMessage().should('be.visible');
  });

  it('should show login page title', () => {
    cy.title().should('include', 'Practice');
  });
});
