import styles from "./css/Nav.module.css";
import data from "../../api/nav_data.json";

export const Nav = ({names}) => {
    const scrollToSection = (section) => {       
        names[section].current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={styles["nav-container"]}>
            {
                data.map((value) => (
                    <div key={value.name} onClick={()=>scrollToSection(value.name)} className={ styles["nav-links"] }>
                        <img src={value.image_url} alt="" className={styles["nav-links-img"]} />
                    </div>
                ))
            }
        </div>
    )
}