import { useContext } from "react";
import styles from "./Form.module.scss";
import Context from "./context";

function TextInput({ label, name, onChange, ...passProps }) {
    const { formValues, handleChange } = useContext(Context);

    return (
        <label className={styles.TextInputWrapper}>
            <span className={styles.label}>{label}</span>
            <input
                {...passProps}
                className={styles.textnput}
                name={name}
                onChange={(e) => {
                    handleChange(e);
                    onChange?.(e);
                }}
                value={formValues[name] || ""}
            />
        </label>
    );
}
export default TextInput;
