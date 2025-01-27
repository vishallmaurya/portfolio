import styles from "./css/workcard.module.css";

export const WorkCard = ({
    img_url = "",
    children = "",
    overlay_content ="",
    ...props
}) => {
    return (
        <div className={styles["workcard"]} {...props}>
            <div className={styles["image-container"]}>
                <img src={img_url} />
                <div className={styles["content-overlay"]}>
                    <p>{overlay_content}</p>
                    <div className={ styles["content-overlay-btns"] }>
                        <div className="content-overlay-btn">
                            <div className="btn-image">

                            </div>        
                        </div>
                    </div>
                </div>
            </div>
            <div className={ styles["workcard-content"] }>
                {children}
            </div>
        </div>
    )
}