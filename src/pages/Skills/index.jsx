import { SkillCard } from "../../components/SkillCard";
import styles from "./Skills.module.css";

export const Skills = () => {
    return (
        <div className={styles["skills"]}>
            <h2 className={styles["skills-h2"]}>Skills</h2>        
            <div className={styles["skillscard"]}>
                <div className={`${styles["skillscard-vertical-one"]}`}>
                    <SkillCard image_url="mongodb.png">Mongodb</SkillCard>
                    <SkillCard className="black" image_url="express.png">Express</SkillCard>
                    <SkillCard image_url="react.png">React</SkillCard>
                </div>
                <div className={`${styles["skillscard-vertical-two"]} `}>
                    <SkillCard className="black" image_url="nodejs.png">Nodejs</SkillCard>
                    <SkillCard  image_url="ml.png">Machine Learning</SkillCard>
                    <SkillCard className="black" image_url="dl.png">Deep Learning</SkillCard>
                </div>
            </div>
        </div>
    )
}