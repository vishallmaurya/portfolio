import styles from "./Education.module.css";
import { useState } from "react";
import data from "../../../api/education_data.json";

export const Education = () => {
    const [selected, setSelected] = useState(true);
    const [value, setDisplay] = useState(data[0]);

    const helper = () => {
        setSelected(!selected);
        !selected ? setDisplay(data[0]) : setDisplay(data[1]);
    }

    return (
        <>
            <div className={styles["toggle-container"]}>
                <div
                    className={`${styles["toggle-option"]} ${
                        selected ? styles["selected"] : ""
                    }`}
                    onClick={helper}
                >
                    Graduation
                </div>
                <div
                    className={`${styles["toggle-option"]} ${
                        !selected ? styles["selected"] : ""
                    }`}
                    onClick={helper}
                >
                    Post-Graduation
                </div>
            </div>
            <div className={ styles["education-content"] }>
                <h2>{value.course}</h2>
                <p>{value.college}</p>
                <span>{value.start_year}</span>-<span>{value.end_year}</span>
                <p>{value.content}</p>
            </div>
        </>
    );
};
