import React from "react";

import HeaderCartButton from "./HeaderCartButton";

import shushiImage from "../../assets/sushi.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Japońska kuchnia</h1>
        <HeaderCartButton />
      </header>
      <div className={styles["main-image"]}>
        <img src={shushiImage} alt="Danie japońskiej kuchni" />
      </div>
    </React.Fragment>
  );
};

export default Header;
