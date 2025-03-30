import styles from "./MealList.module.css";
import Cart from "../UI/Card";
import MealItem from "./MealsItem/MealItem";

const DUMMY_MEALS = [
    {
        id: "m1",
        name: 'Roll "Naomi"',
        description:
            "Philadelphia cheese, chicken fillet, masago, tomato, cucumber, sesame",
        price: 11.99,
    },
    {
        id: "m2",
        name: "Spicy in Salmon",
        description: "Rice, salmon, spicy sauce",
        price: 3.99,
    },
    {
        id: "m3",
        name: "Eel Sushi",
        description: "Smoked eel, unagi sauce, sesame",
        price: 4.99,
    },
    {
        id: "m4",
        name: 'Salad "Salmon Poke"',
        description:
            "Rice, salmon, cucumber, chuka, nori, tuna flakes, peanut sauce",
        price: 7.99,
    },
];

const MealList = () => {
    const mealList = DUMMY_MEALS.map((meal) => (
        <MealItem
            key={meal.key}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));
    return (
        <section className={styles.meals}>
            <Cart>
                <ul>{mealList}</ul>
            </Cart>
        </section>
    );
};

export default MealList;
