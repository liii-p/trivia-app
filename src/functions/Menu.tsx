import { useState } from "react";
import QuestionCard from "./QuestionCard";

export default function Menu({}){
const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
    console.log("handling click");
  }

  if (!visible) return <QuestionCard/>;

    return(
        <div>
            <p>Hello!</p>
            {/* Add category dropdown selection */}
            <button onClick={handleClick}>Start</button>
        </div>
    )
}