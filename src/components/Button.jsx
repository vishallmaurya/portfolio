import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Button = ({
    classname = "",
    logo = "",
    children,
    ...props
}) => {
    return (
        <button className={classname} {...props}>
            {children}
            <FontAwesomeIcon icon={logo} />
        </button>
    )
}