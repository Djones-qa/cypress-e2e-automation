export class InventoryPage {
  assertOnInventoryPage() {
    cy.url().should('include', 'inventory');
    cy.get('.inventory_list').should('be.visible');
  }
  addToCart(productName: string) {
    cy.get('.inventory_item').filter(':contains(' + productName + ')').find('button').click();
  }
  getCartCount() {
    return cy.get('.shopping_cart_badge');
  }
  goToCart() {
    cy.get('.shopping_cart_link').click();
  }
  sortBy(option: string) {
    cy.get('.product_sort_container').select(option);
  }
  getProductNames() {
    return cy.get('.inventory_item_name');
  }
  getProductPrices() {
    return cy.get('.inventory_item_price');
  }
}
export default new InventoryPage();
