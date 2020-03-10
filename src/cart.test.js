import Cart from "./Cart";

describe("Cart", () => {
  it("Should add product into cart", () => {
    const cart = new Cart();

    cart.addProduct({ name: "Dove Soap", price: 39.99, quantity: 5 });

    expect(cart.getProdcutCount()).toBe(5);
    expect(cart.getTotalPrice()).toBe(199.95);
  });
});
