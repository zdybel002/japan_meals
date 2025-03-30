import styles from "./Card.module.css";

// It is wraper for css properties
const Card = (props) => {
    return <div className={styles.card}>{props.children}</div>;
};

export default Card;
