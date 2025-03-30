import styles from "./PromoText.module.css";

const PromoText = () => {
    return (
        <section className={styles["promo_text"]}>
            <h2>Kuchnia Japońska</h2>
            <p>
                Zapraszamy do naszej japońskiej restauracji, gdzie czekają na
                Ciebie wyjątkowe promocje na sushi i ramen! Każdego dnia
                oferujemy zestawy w atrakcyjnych cenach oraz specjalne rabaty
                dla stałych klientów.
            </p>
            <p>
                Spróbuj świeżych, autentycznych dań przygotowanych przez
                doświadczonych kucharzy prosto z Japonii. Odwiedź nas już dziś i
                poczuj prawdziwy smak Japonii w najlepszej atmosferze!
            </p>
        </section>
    );
};

export default PromoText;
