export class CheckoutPage {
  fillShippingInfo(firstName: string, lastName: string, zip: string) {
    cy.get('[data-test=firstName]').type(firstName);
    cy.get('[data-test=lastName]').type(lastName);
    cy.get('[data-test=postalCode]').type(zip);
  }
  continue() {
    cy.get('[data-test=continue]').click();
  }
  finish() {
    cy.get('[data-test=finish]').click();
  }
  assertOrderConfirmed() {
    cy.get('.complete-header').should('contain', 'Thank you for your order');
  }
}
export default new CheckoutPage();
