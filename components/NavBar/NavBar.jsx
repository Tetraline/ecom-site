import styles from "../../styles/NavBar.module.scss";
import Image from "next/image";
import Basket from "../Basket/Basket";
import { useState } from "react";

const NavBar = ({ basket, productData }) => {
  const [showBasket, setShowBasket] = useState(false);
  const toggleShowBasket = () => {
    setShowBasket(!showBasket);
  };
  return (
    <nav className={styles.nav}>
      <h1 className="nav__item">🛵fast</h1>
      <button onClick={toggleShowBasket}>
        <Image src="/basket.png" alt="Basket" width="20" height="20"></Image>
      </button>
      {showBasket && (
        <Basket
          basket={basket}
          productData={productData}
          toggleShowBasket={toggleShowBasket}
        />
      )}
    </nav>
  );
};

export default NavBar;
