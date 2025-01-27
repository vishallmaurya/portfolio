import styles from "./Education.module.css";
import { useState } from "react";

export const Education = () => {
    const [selected, setSelected] = useState(true);

    return (
        <div className={styles["toggle-container"]}>
            <div
                className={`${styles["toggle-option"]} ${
                    selected ? styles["selected"] : ""
                }`}
                onClick={() => setSelected(!selected)}
            >
                Graduation
            </div>
            <div
                className={`${styles["toggle-option"]} ${
                    !selected ? styles["selected"] : ""
                }`}
                onClick={() => setSelected(!selected)}
            >
                Post-Graduation
            </div>
        </div>
    );
};
