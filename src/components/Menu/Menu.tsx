import { useState } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Menu.module.scss"

const Menu: React.FC = (): JSX.Element => {
  const baseURL = "https://opentdb.com/api.php";

  const [visible, setVisible] = useState(true);
  const [showDropdown, setshowDropdown] = useState<boolean>(false);
  const [selectDifficulty, setSelectDifficulty] = useState<string>("");
  const difficulties = () => {
    return ["Easy", "Medium", "Hard"];
  };

  const handleClick = () => {
    setVisible(false);
    console.log("handling click");
  }

  // toggle the dropdown menu
  const toggleDropdown = () => {
    setshowDropdown(!showDropdown);
  };

  // dismiss the drop down menu if the user clicks anywhere outside of the element
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (event.currentTarget === event.target) {
      setshowDropdown(false);
    }
  };

  // consume difficulty selection from child component with callback function
  const difficultySelection = (difficulty: string) => {
    setSelectDifficulty(difficulty);
  };

  // If the user has clicked the start button, the questioncard will be displayed instead.
  if (!visible) return <QuestionCard BASE_URL={baseURL}/>;

    return(
        <div className={styles.Menu}>
          
            <p>Hello!</p>
            {/* Add category dropdown selection */}
            {/* Add difficulty dropdown selection */}
            <div>
            {selectDifficulty ? `${selectDifficulty} mode selected.` : "Select game difficulty"}
            </div>
            <button className={showDropdown ? "active" : undefined}
            onClick={(): void => toggleDropdown()}
            onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
              dismissHandler(e)
            }
            >
              <div>{selectDifficulty ? "Select: " + selectDifficulty : "Select..."}</div>
              {showDropdown && (
                <Dropdown 
                  selectDifficulty={difficulties()}
                  showDropDown={false}
                  toggleDropDown={(): void => toggleDropdown()}
                  difficultySelection={difficultySelection}
                />
              )}
            </button>
            <button onClick={handleClick}>Start</button>
        </div>
    );
};

export default Menu;