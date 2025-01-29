import { Form } from "../../components/Form";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
        <div className={styles["contact-container"]}>
            <div className={styles["contact-lines"]}>
                Searching for enthusiast engineer? You're at right place!!
            </div>
            <Form />
        </div>
    )
}