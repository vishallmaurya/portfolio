import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../assets/vishal_maurya_cv.pdf";


export const Button = ({
    classname = "",
    logo = "",
    children,
    ...props
}) => {
    return (
        <a href={ resume } target="_blank" rel="noopener noreferrer" style={{color: "white", textDecoration: "none"}}>
            <button className={classname} {...props}>
                {children}
                { logo && <FontAwesomeIcon icon={logo} /> }
            </button>
        </a>
    )
}