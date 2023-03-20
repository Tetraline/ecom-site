import styles from "../../styles/NavBar.module.scss";
import Image from "next/image";

const NavBar = ({ handleBasketToggle }) => {
  return (
    <nav className={styles.nav}>
      <h1 className="nav__item">🛵fast</h1>
      <button onClick={handleBasketToggle}>
        <Image src="/basket.png" alt="Basket" width="20" height="20"></Image>
      </button>
    </nav>
  );
};

export default NavBar;
