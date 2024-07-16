import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Menu.module.scss";
import { MenuType } from "../../types";

const Menu: React.FC<MenuType> = ({
  setInvisible,
  difficultyFunc,
  difficultyOptions,
  selectDifficulty,
}: MenuType): JSX.Element => {
  const [showDropdown, setshowDropdown] = useState<boolean>(false);

  // TODO: set default difficulty, else check the user has selected difficulty

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

  // If the user has clicked the start button, the questioncard will be displayed instead.

  return (
    <div className={styles.Menu}>
      <p>Hello!</p>
      {/* Add category dropdown selection */}
      {/* Add difficulty dropdown selection */}
      <div>
        {selectDifficulty
          ? `${selectDifficulty} mode selected.`
          : "Select game difficulty"}
      </div>
      <div className={styles.Menu__selectDifficulty}>
        <button
          className={showDropdown ? "active" : undefined}
          onClick={(): void => toggleDropdown()}
          onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
            dismissHandler(e)
          }
        >
          <div>
            {selectDifficulty ? "Select: " + selectDifficulty : "Select..."}
          </div>
          {showDropdown && (
            <Dropdown
              selectDifficulty={difficultyOptions}
              showDropDown={false}
              toggleDropDown={(): void => toggleDropdown()}
              difficultySelection={difficultyFunc}
            />
          )}
        </button>
      </div>
      <div className={styles.Menu__start}>
        <button onClick={setInvisible}>Start</button>
      </div>
    </div>
  );
};

export default Menu;
