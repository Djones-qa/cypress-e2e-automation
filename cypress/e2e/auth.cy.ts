import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';

describe('Authentication', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    InventoryPage.assertOnInventoryPage();
  });

  it('should show error for locked out user', () => {
    LoginPage.login('locked_out_user', 'secret_sauce');
    LoginPage.getErrorMessage().should('contain', 'Sorry, this user has been locked out');
  });

  it('should show error for wrong password', () => {
    LoginPage.login('standard_user', 'wrong_password');
    LoginPage.getErrorMessage()
      .should('be.visible')
      .and('contain', 'Username and password do not match any user in this service');
  });

  it('should show error for empty credentials', () => {
    LoginPage.clickLogin();
    LoginPage.getErrorMessage().should('contain', 'Username is required');
  });

  it('should show login page title', () => {
    cy.title().should('eq', 'Swag Labs');
  });
});
