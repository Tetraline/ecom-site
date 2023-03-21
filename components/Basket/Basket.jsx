import Image from "next/image";
import whiteCross from "../../public/white-cross.png";
import styles from "../../styles/Basket.module.scss";

const Basket = ({ basket, productData, toggleShowBasket }) => {
  const basketJSX = Object.keys(basket).map((key) => {
    const product = productData.find((product) => product.id == key);
    const quantity = basket[key];
    const formattedPrice = Number(product.price).toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
    const lineTotal = (product.price * quantity).toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
    return (
      <p
        key={key}
      >{`${product.name} x ${quantity} @ ${formattedPrice} = ${lineTotal}`}</p>
    );
  });
  let totalPrice = 0;
  Object.keys(basket).forEach((key) => {
    totalPrice +=
      basket[key] * // Quantity
      Number(productData.find((product) => product.id == key).price); // Price
  });
  totalPrice = totalPrice.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <div className={styles.basket}>
      <div className={styles.basket__content}>
        <Image
          onClick={toggleShowBasket}
          src={whiteCross}
          width={25}
          height={25}
          alt="Close"
        ></Image>
        <h2>Basket</h2>
        {basketJSX}
        <h3>Total Price</h3>
        {totalPrice}
      </div>
    </div>
  );
};

export default Basket;
