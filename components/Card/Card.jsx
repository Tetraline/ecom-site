import Image from "next/image";
import styles from "../../styles/Card.module.scss";
import { useState } from "react";
const Card = ({ product, handleBasketChange }) => {
  const [quantity, setQuantity] = useState(0);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
    handleBasketChange(product.id, quantity + 1); // hacky
  };
  const handleDecrement = () => {
    if (quantity) {
      setQuantity(quantity - 1);
      handleBasketChange(product.id, quantity - 1); // hacky
    }
  };
  return (
    <div className={`${styles.card} ${quantity ? styles["in-basket"] : ""}`}>
      <div className={styles.card__img}>
        <Image
          src={`/${product.name}.jpg`}
          width="100"
          height="100"
          alt={`Picture of ${product.name}`}
        />
      </div>
      <div className={styles.card__body}>
        <h2>{product.name}</h2>
        <p>£{product.price}</p>
      </div>
      <div className={styles["card__quantity-selector"]}>
        {quantity ? (
          <>
            <button
              onClick={handleDecrement}
              className={styles["card__button--minus"]}
            >
              -
            </button>
            <input value={quantity} readOnly type="text" />
            <button
              onClick={handleIncrement}
              className={styles["card__button--plus"]}
            >
              +
            </button>
          </>
        ) : (
          <button
            onClick={handleIncrement}
            className={styles["card__button--add-to-basket"]}
          >
            Add to basket
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
