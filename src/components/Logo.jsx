import styles from "./css/logo.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";

export const Logo = () => {
    return (
        <>
            <div className={ styles["logos-container"] }>
                <a href="https://www.linkedin.com/in/vishal-maurya-646619247/" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                    <div className={styles["logo"]} >
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </div>
                </a>
                <a href="https://github.com/vishallmaurya" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                    <div className={styles["logo"]}>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </a>
                <a href="https://x.com/Vishal210M" target="_blank" rel="noopener noreferrer" style={{color: "white"}}>
                    <div className={styles["logo"]}>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </div>
                </a>
            </div>
        </>
    )
}