import DropdownButton from "../DropdownButton/DropdownButton";
import DropdownContent from "../DropdownContent/DropdownContent";
import styles from "./Dropdown.module.scss"

const dropdown = ({buttonText}: any, {content}: any) => {
    return (
        <div className={styles.Dropdown}>
            <DropdownButton>{buttonText}</DropdownButton>
            <DropdownContent>{content}</DropdownContent>
        </div>
    )
}

export default dropdown;