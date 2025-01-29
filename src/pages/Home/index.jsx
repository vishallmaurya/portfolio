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
import data from "../../../api/nav_data.json";
import { useRef } from "react";


export const Home = () => {
    const names = data.reduce((acc, value) => {
        acc[value.name] = useRef(null);
        return acc;
    }, {});
    

    return (
        <div className={styles["header-container"]}>
            <div className={styles["main-content-container"]}>
                <div ref={names["Home"]} className={styles["header-content-one"] }>
                    <div className={styles["center"]}>
                        <div className={styles["image-container"]}>
                            <img src="logo.png" alt="" />
                        </div>
                        <span className={styles["name-span"] } >VISHAL MAURYA</span>
                        <Logo />
                        <Button logo={faArrowDown} classname={styles["button-resume"]}>Resume</Button>
                        
                    </div>
                    <div className={` ${styles["header-nav-container"]} `}>
                        <Nav names={ names } />
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                        Software Engineer | Developer | 📚 Lifelong Learner Building open-source tools to make life easier.
                        </div>
                    </div>
                </div>
                
                    

                <div className={styles["heading"]}>
                    Introduction
                    <div className={ styles["heading-after"] }></div>
                </div>
                <div ref={names["Introduction"]} className={styles["introduction-container"]}>
                    <About />
                    <Skills />
                </div>
                
                <div className={styles["heading"]}>
                    My Works
                    <div className={ styles["heading-after"] }></div>
                </div>
                <div ref={names["Work"]} className={styles["works-container"]}>
                    <Works />
                </div>

                <div className={styles["heading"]}>
                    My Education
                    <div className={ styles["heading-after"] }></div>
                </div>
                <div ref={names["Education"]} className={styles["education-container"]}>
                    <Education></Education>
                </div>

                <div className={styles["heading"]}>
                    Contact Me
                    <div className={ styles["heading-after"] }></div>
                </div>
                <div ref={names["Contact"]} className={styles["contact-container"]}>
                    <Contact></Contact>
                </div>
            </div>
        </div>
    );
};
