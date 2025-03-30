import styles from "./Header.module.css";
import React from "react";
import sushiImage from "../../assets/sushi.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Japońska kuchnia</h1>
                <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div className={styles["main-image"]}>
                <img src={sushiImage} alt="Dania kuchi japońskiej" />
            </div>
        </React.Fragment>
    );
};

export default Header;
