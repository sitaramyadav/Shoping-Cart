function Cart() {
  const products = [];
  //it should contain { id, title, price }
  let totalPrice = 0;

  const generateId = () => {
    return `${Date.now().toString(36)}
      ${Math.random()
        .toString(36)
        .substr(2, 5)}`.toUpperCase();
  };

  const getProdcutCount = () => {
    return products.length;
  };

  const getTotalPrice = () => {
    return Number(totalPrice.toFixed(2));
  };
  const addProduct = ({ name, price, quantity }) => {
    console.log(quantity);
    for (let i = 0; i < quantity; i++) {
      products.push({ id: generateId(), name, price });
      totalPrice += price;
    }
  };

  return { getProdcutCount, getTotalPrice, addProduct };
}

export default Cart;
