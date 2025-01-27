import { useEffect, useState } from "react";
import { WorkCard } from "../../components/WorkCard";
import styles from "./Works.module.css";
import workData from "../../../api/work_data.json";

export const Works = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(workData);
    }, []);

    return (
        <div className={styles["work-card-container"]}>
            {
                data.map((value) => (
                    <WorkCard key={value.description} img_url={value.image_url} overlay_content={ value.overlay_content }>{ value.description }</WorkCard>
                ))                
            }
        </div>
    )
}