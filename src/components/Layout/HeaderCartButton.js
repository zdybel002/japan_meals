import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-contex";

import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
    const [IsButtonAnimated, setIsButtonAnimated] = useState(false);

    const cartContext = useContext(CartContext);

    const cartItemNumber = cartContext.items.reduce((currentValue, item) => {
        return currentValue + item.amount;
    }, 0);

    const buttonClases = `${styles.button} ${
        IsButtonAnimated ? styles.bump : ""
    }`;

    useEffect(() => {
        if (cartContext.items.length === 0) {
            return;
        }
        setIsButtonAnimated(true);

        const timer = setTimeout(() => {
            setIsButtonAnimated(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [cartContext.items]);

    return (
        <button className={buttonClases} onClick={props.onClick}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Kosz</span>
            <span className={styles.badge}>{cartItemNumber}</span>
        </button>
    );
};

export default HeaderCartButton;
