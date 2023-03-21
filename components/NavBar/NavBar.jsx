import styles from "../../styles/NavBar.module.scss";
import Image from "next/image";
import Basket from "../Basket/Basket";
import { useState } from "react";

const NavBar = ({ basket, productData }) => {
  const [showBasket, setShowBasket] = useState(false);
  return (
    <nav className={styles.nav}>
      <h1 className="nav__item">🛵fast</h1>
      <button onClick={() => setShowBasket(!showBasket)}>
        <Image src="/basket.png" alt="Basket" width="20" height="20"></Image>
      </button>
      {showBasket && <Basket basket={basket} productData={productData} />}
    </nav>
  );
};

export default NavBar;
