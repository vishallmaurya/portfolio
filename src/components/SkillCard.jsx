import styles from "./css/skillcard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const SkillCard = ({
    children = "",
    className = "",
    image_url="",
    logo="",
    ...props   
}) => {
    return (
        <div className={`${styles["card"]} ${styles[className]}`} {...props}>
            {logo && <FontAwesomeIcon icon={logo} />}
            <div className={styles["img-container"]}>
                {image_url && <img className={styles["card-image"]} src={image_url} />}
            </div>
            {children}
        </div>
    )
}