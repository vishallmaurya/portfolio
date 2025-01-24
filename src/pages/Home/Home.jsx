import styles from "./Home.module.css";

export const Home = () => {
    return (
        <div className={styles["header-heading"]}>
            <span>VISHAL MAURYA</span>
            <div className={styles["main-content-container"]}>
                <div className={styles["image-container"]}>
                    <img src="logo.png" alt="" />
                </div>
            </div>
        </div>
    );
};
