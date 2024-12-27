import styles from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = () => {
  return (
    <form className={styles.form}>
      <Input
        label="ilość"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Dodaj</button>
    </form>
  );
};

export default MealItemForm;
