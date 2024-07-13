import { FaChevronDown } from "react-icons/fa";
import styles from "./DropdownButton.module.scss"

const DropdownButton = ({props}: any) => {
return(
    <div className={styles.DropdownButton}>
        {props}
        <span><FaChevronDown /></span>
    </div>
)
}

export default DropdownButton;