import styles from "./css/workcard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";


export const WorkCard = ({
    img_url = "",
    children = "",
    overlay_content = "",
    github_link="#",
    hosted="#",
    ...props
}) => {
    return (
        <div className={styles["workcard"]} {...props}>
            <div className={styles["image-container"]}>
                <img src={img_url} className={ styles["image-container-img"] } />
                <div className={styles["content-overlay"]}>
                    <p>{overlay_content}</p>
                    <div className={ styles["content-overlay-btns"] }>
                        {hosted != "restricted" ?
                            <div className={styles["content-overlay-btn"]}>
                                <a href={hosted} className={styles["links"]} target="_blank" rel="noopener noreferrer">
                                    <div className={styles["btn-image"]}>
                                        <img src="demo.png" alt="" />
                                    </div>
                                    <div className={styles["btn-content"]}>
                                        Demo
                                    </div>
                                </a>
                            </div>
                            : ""
                        }
                        {github_link != "restricted" ?
                            <div className={styles["content-overlay-btn"]}>
                                <a href={github_link} className={styles["links"]} target="_blank" rel="noopener noreferrer">
                                    <div className={styles["btn-image"]}>
                                        <FontAwesomeIcon icon={faGithub} size="2x" />
                                    </div>
                                    <div className={styles["btn-content"]}>
                                        Code
                                    </div>
                                </a>
                            </div>
                            : ""
                        }  
                    </div>
                </div>
            </div>
            <div className={ styles["workcard-content"] }>
                {children}
            </div>
        </div>
    )
}