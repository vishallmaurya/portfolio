import { Logo } from "../../components/Logo";
import { About } from "../About";
import { Skills } from "../Skills";
import { Button } from "../../components/Button";

import styles from "./Home.module.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Works } from "../Works";
import { Education } from "../Education";
import { Contact } from "../Contact";
import { Nav } from "../../components/Nav";


export const Home = () => {
    return (
        <div className={styles["header-container"]}>
            <div className={styles["main-content-container"]}>
                <div className={styles["header-content-one"] }>
                    <div className={styles["center"]}>
                        <div className={styles["image-container"]}>
                            <img src="logo.png" alt="" />
                        </div>
                        <span>VISHAL MAURYA</span>
                        <Logo />
                        <Button logo={faArrowDown} classname={styles["button-resume"]}>Resume</Button>
                        
                    </div>
                    <div className={` ${styles["header-nav-container"]} `}>
                        <Nav />
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        Software Engineer | Developer | 📚 Lifelong Learner Building open-source tools to make life easier.
                        </div>
                    </div>
                </div>
                
                    

                <div className={styles["heading"]}>
                    Introduction
                    <div className={ styles["heading-after"] }></div>
                </div>
                <div className={styles["introduction-container"]}>
                    <About />
                    <Skills />
                </div>
                
                <div className={styles["heading"]}>
                    My Works
                    <div className={ styles["heading-after"] }></div>
                </div>
                <div className={styles["works-container"]}>
                    <Works />
                </div>

                <div className={styles["heading"]}>
                    My Education
                    <div className={ styles["heading-after"] }></div>
                </div>
                <div className={styles["education-container"]}>
                    <Education></Education>
                </div>

                <div className={styles["heading"]}>
                    Contact Me
                    <div className={ styles["heading-after"] }></div>
                </div>
                <div className={styles["education-container"]}>
                    <Contact></Contact>
                </div>
            </div>
        </div>
    );
};
