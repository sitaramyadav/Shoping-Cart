import Cart from "./Cart";

describe("Cart", () => {
  it("Should add a product, Dove Soap with a unit price of 39.99", () => {
    const cart = new Cart();

    cart.addProduct({ name: "Dove Soap", price: 39.99, quantity: 1 });
    expect(cart.getProdcutCount()).toBe(1);
    expect(cart.getTotalPrice()).toBe(44.99);
  });

  it("should add a product Dove Soap with a unit price and another product, Axe Deo with a unit price", () => {
    const cart = new Cart();

    cart.addProduct({ name: "Dove Soap", price: 39.99, quantity: 2 });
    cart.addProduct({ name: "Axe Deos", price: 99.99, quantity: 2 });

    expect(cart.getProdcutCount()).toBe(4);
    expect(cart.totalSalesTaxAmount()).toBe(35.0);
    expect(cart.getTotalPrice()).toBe(314.96);
  });
});
