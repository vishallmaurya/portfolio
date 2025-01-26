import { Logo } from "../../components/Logo";
import { About } from "../About";
import { Skills } from "../Skills/Skills";
import { Button } from "../../components/Button";

import styles from "./Home.module.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";


export const Home = () => {
    return (
        <div className={styles["header-container"]}>
            <div className={styles["main-content-container"]}>
                <div className={styles["image-container"]}>
                    <img src="logo.png" alt="" />
                </div>
                <span>VISHAL MAURYA</span>
                <Logo />
                <Button logo={faArrowDown} classname={styles["button-resume"]}>Resume</Button>
                <div className={styles["introduction-container"]}>
                    <About />
                    <Skills />
                </div>
            </div>
        </div>
    );
};
