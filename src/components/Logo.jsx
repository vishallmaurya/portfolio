import styles from "./css/logo.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export const Logo = () => {
    return (
        <>
            <div className={ styles["logos-container"] }>
                <div className={styles["logo"]} >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
                <div className={styles["logo"]}>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className={styles["logo"]}>
                    <FontAwesomeIcon icon={faXTwitter} />
                </div>
            </div>
        </>
    )
}