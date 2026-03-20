export class CartPage {
  assertOnCartPage() {
    cy.url().should('include', 'cart');
  }
  getCartItems() {
    return cy.get('.cart_item');
  }
  removeItem(productName: string) {
    cy.get('.cart_item').filter(':contains(' + productName + ')').find('button').click();
  }
  proceedToCheckout() {
    cy.get('[data-test=checkout]').click();
  }
}
export default new CartPage();
