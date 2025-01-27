import styles from "./css/workcard.module.css";

export const WorkCard = ({
    img_url = "",
    children = "",
    ...props
}) => {
    return (
        <div className={styles["workcard"]} {...props}>
            <div className={styles["image-container"]}>
                <img src={img_url} />
            </div>
            <div className={ styles["workcard-content"] }>
                {children}
            </div>
        </div>
    )
}