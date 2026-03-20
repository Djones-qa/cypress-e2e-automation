import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Checkout Journey', () => {
  beforeEach(() => {
    cy.session('user', () => {
      LoginPage.visit();
      LoginPage.login('standard_user', 'secret_sauce');
    });
    cy.visit('/inventory.html');
  });

  it('should complete full checkout journey', () => {
    InventoryPage.addToCart('Sauce Labs Backpack');
    InventoryPage.getCartCount().should('contain', '1');
    InventoryPage.goToCart();
    CartPage.assertOnCartPage();
    CartPage.getCartItems().should('have.length', 1);
    CartPage.proceedToCheckout();
    CheckoutPage.fillShippingInfo('Darrius', 'Jones', '44870');
    CheckoutPage.continue();
    CheckoutPage.finish();
    CheckoutPage.assertOrderConfirmed();
  });

  it('should add multiple products and verify cart count', () => {
    InventoryPage.addToCart('Sauce Labs Backpack');
    InventoryPage.addToCart('Sauce Labs Bike Light');
    InventoryPage.addToCart('Sauce Labs Bolt T-Shirt');
    InventoryPage.getCartCount().should('contain', '3');
  });

  it('should remove item from cart', () => {
    InventoryPage.addToCart('Sauce Labs Backpack');
    InventoryPage.addToCart('Sauce Labs Bike Light');
    InventoryPage.goToCart();
    CartPage.removeItem('Sauce Labs Backpack');
    CartPage.getCartItems().should('have.length', 1);
  });

  it('should sort products by price low to high', () => {
    InventoryPage.sortBy('lohi');
    InventoryPage.getProductPrices().then((prices) => {
      const priceValues = [...prices].map((el) =>
        parseFloat(el.innerText.replace('$', ''))
      );
      const sorted = [...priceValues].sort((a, b) => a - b);
      expect(priceValues).to.deep.equal(sorted);
    });
  });

  it('should sort products by name A to Z', () => {
    InventoryPage.sortBy('az');
    InventoryPage.getProductNames().then((names) => {
      const nameValues = [...names].map((el) => el.innerText);
      const sorted = [...nameValues].sort();
      expect(nameValues).to.deep.equal(sorted);
    });
  });
});
