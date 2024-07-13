import { useState } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import Dropdown from "../Dropdown/Dropdown";
import styles from "./Menu.module.scss"

export default function Menu(){
const [visible, setVisible] = useState(true);
const baseURL = "https://opentdb.com/api.php";
//let difficulty = "";

  const handleClick = () => {
    setVisible(false);
    console.log("handling click");
  }

  if (!visible) return <QuestionCard BASE_URL={baseURL}/>;

    return(
        <div className={styles.Menu}>
            <p>Hello!</p>
            {/* Add category dropdown selection */}
            {/* Add difficulty dropdown selection */}
            <p>Select your difficulty</p>
            <Dropdown buttonText="Difficulty" content="Hello" />
            <button onClick={handleClick}>Start</button>
        </div>
    )
}