function Cart() {
  const products = [];
  let totalPrice = 0;

  const generateId = () => {
    return `${Date.now().toString(36)}${Math.random()
      .toString(36)
      .substr(2, 5)}`.toUpperCase();
  };

  const getProdcutCount = () => {
    return products.length;
  };

  const totalSalesTaxAmount = () => {
    return Math.round(
      products.reduce((salesAmount, product) => {
        return salesAmount + (Number(product.price) * 12.5) / 100;
      }, 0)
    );
  };

  const getTotalPrice = () => {
    return Number((totalPrice + totalSalesTaxAmount()).toFixed(2));
  };
  const addProduct = ({ name, price, quantity }) => {
    for (let i = 0; i < quantity; i++) {
      products.push({ id: generateId(), name, price });
      totalPrice += price;
    }
  };

  return { getProdcutCount, getTotalPrice, addProduct, totalSalesTaxAmount };
}

export default Cart;
