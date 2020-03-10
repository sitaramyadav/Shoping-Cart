import Cart from "./Cart";

describe("Cart", () => {
  it("Should add 5 Dove Soaps and 3 Dove Soaps into cart", () => {
    const cart = new Cart();

    cart.addProduct({ name: "Dove Soap", price: 39.99, quantity: 5 });
    cart.addProduct({ name: "Dove Soap", price: 39.99, quantity: 3 });
    expect(cart.getProdcutCount()).toBe(8);
    expect(cart.getTotalPrice()).toBe(319.92);
  });
});
