import styles from "./css/Nav.module.css";

export const Nav = () => {
    return (
        <div className={ styles["nav-container"] }>
            <div className={styles["nav-links"]}>
                <img src="home.png" alt="" className={styles["nav-links-img"]} />
            </div>
            <div className={styles["nav-links"]}>
                <img src="introduction.png" alt="" className={styles["nav-links-img"]} />
            </div>
            
            <div className={styles["nav-links"]}>
                <img src="work.png" alt="" className={styles["nav-links-img"]} />
            </div>
            <div className={styles["nav-links"]}>
                <img src="education.png" alt="" className={styles["nav-links-img"]} />
            </div>
            <div className={styles["nav-links"]}>
                <img src="contact.png" alt="" className={styles["nav-links-img"]} />
            </div>
        </div>
    )
}