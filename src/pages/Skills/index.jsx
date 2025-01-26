import { SkillCard } from "../../components/SkillCard";
import styles from "./Skills.module.css";

export const Skills = () => {
    return (
        <div className={styles["skills"]}>
            <h2>Skills</h2>        
            <div className={styles["skillscard"]}>
                <SkillCard image_url="mongodb.png">Mongodb</SkillCard>
                <SkillCard image_url="express.png">Express</SkillCard>
                <SkillCard image_url="react.png">React</SkillCard>
                <SkillCard image_url="nodejs.png">Nodejs</SkillCard>
                <SkillCard image_url="ml.png">Machine Learning</SkillCard>
                <SkillCard image_url="dl.png">Deep Learning</SkillCard>
            </div>
        </div>
    )
}