import styles from "./QuestionCard.module.scss";
import { QuestionType } from "../../types";

type Props = {
  data: QuestionType;
};

const QuestionCard = ({ data }: Props) => {
  const qu = data.results[0];
  return (
    // Here we will either display the data or if it's not yet loaded, display some loading text
    <div className={styles.RenderData}>
      <h2>{qu.question}</h2>
      <button>{qu.correct_answer}</button>
      <button>{qu.incorrect_answers}</button>
      <button>{qu.incorrect_answers}</button>
      <button>{qu.incorrect_answers}</button>
      <div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default QuestionCard;
