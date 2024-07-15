import { useState } from "react";
import { ActiveGameType } from "../../types";

const baseURL = `https://opentdb.com/api.php`;

const useQuestions = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async (request: string) => {
    await fetch(`${baseURL}?amount=1&difficulty=${request}&type=multiple`)
      .then(async (response) => await response.json())
      .then((data) => {
        const questionData = {
          ...data.results,
        };
        console.log("Question data: ", questionData);
        setQuestions(questionData);
      })
      .catch((e) => console.log({ e }));
    return questions;
  };

  const nextQuestion = (url: ActiveGameType) => {
    getQuestions(url.urlArgs);
  };

  return {
    questions,
    nextQuestion,
  };
};

export default useQuestions;
