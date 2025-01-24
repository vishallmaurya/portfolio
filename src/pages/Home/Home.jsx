import { Logo } from "../../components/Logo";
import { Introduction } from "../../components/Introduction";
import { Button } from "../../components/Button";

import styles from "./Home.module.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";


export const Home = () => {
    return (
        <div className={styles["header-heading"]}>
            <span>VISHAL MAURYA</span>
            <div className={styles["main-content-container"]}>
                <Logo />
                <Button logo={faArrowDown} classname={styles["button-resume"]}>Resume</Button>
                <Introduction />
            </div>
        </div>
    );
};
