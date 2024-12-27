import CartIcon from "../Cart/CartIcon";

import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.badge}>Kosz</span>
      <span>2</span>
    </button>
  );
};

export default HeaderCartButton;
