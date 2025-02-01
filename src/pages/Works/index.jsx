import { WorkCard } from "../../components/WorkCard";
import styles from "./Works.module.css";
import data from "../../../api/work_data.json";

export const Works = () => {
    return (
        <div className={styles["work-card-container"]}>
            {
                data.map((value) => (
                    <WorkCard
                        key={value.description}
                        img_url={value.image_url}
                        overlay_content={value.overlay_content}
                        github_link={value.github}
                        hosted={value.hosted}
                    >
                        {value.description}
                    </WorkCard>
                ))                
            }
        </div>
    )
}