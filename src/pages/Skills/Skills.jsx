import { SkillCard } from "../../components/SkillCard";
import styles from "./Skills.module.css";

export const Skills = () => {
    return (
        <div className={styles["skills"]}>
            <h2>Skills</h2>
            <SkillCard image_url="react.png">React</SkillCard>
        </div>
    )
}