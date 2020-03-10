import Cart from "./Cart";

describe("Cart", () => {
  it("Should And a product, Dove Soap with a unit price of 39.99", () => {
    const cart = new Cart();

    cart.addProduct({ name: "Dove Soap", price: 39.99, quantity: 1 });
    expect(cart.getProdcutCount()).toBe(1);
    expect(cart.getTotalPrice()).toBe(39.99);
  });
});
