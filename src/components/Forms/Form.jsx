import { createContext } from "react";
import styles from "./Form.module.scss";
import Context from "./context";
import useFormValues from "../../pages/Hooks/useFormValues";
function Form({ children, initValues, onSubmit }) {
    const [formValues, handleChange] = useFormValues(initValues);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues);
    };

    const values = {
        formValues,
        handleChange,
    };

    return (
        <Context.Provider value={values}>
            <form className={styles.form} onSubmit={handleSubmit}>
                {children}
            </form>
        </Context.Provider>
    );
}
export default Form;
