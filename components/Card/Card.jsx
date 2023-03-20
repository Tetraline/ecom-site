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
    <div className={styles.card}>
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
      <div className="card__quantity-selector">
        <button onClick={handleIncrement} className="card__button">
          ➕
        </button>
        <p>{quantity}</p>
        <button onClick={handleDecrement} className="card__button">
          ➖
        </button>
      </div>
    </div>
  );
};

export default Card;
