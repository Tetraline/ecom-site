const Basket = ({ basket, productData }) => {
  console.log(basket); // object
  console.log(productData); // Array
  const basketJSX = Object.keys(basket).map((key) => {
    const product = productData.find((product) => product.id == key);
    const quantity = basket[key];
    return (
      <p key={key}>{`${product.name} x ${quantity} @ ${product.price} = ${
        product.price * quantity
      }`}</p>
    );
  });
  return basketJSX;
};

export default Basket;
