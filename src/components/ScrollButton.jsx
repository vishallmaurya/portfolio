import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import styles from "./css/scrollbutton.module.css";
import { useEffect, useState } from "react";

export const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else setIsVisible(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className={`${styles["upper-arrow"]} ${isVisible ? styles["visible"] : styles["hidden"]}`} onClick={scrollTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </div>
    )
}