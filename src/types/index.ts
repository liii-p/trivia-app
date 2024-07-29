export type QuestionType = {
  results: {
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  };
};

export type QuestionCardType = {
  selectDifficulty: string;
};

export type MenuType = {
  setInvisible: Function;
  difficultyFunc: Function;
  difficultyOptions: string[];
  selectDifficulty: string;
};

export type DropdownProps = {
  selectDifficulty: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  difficultySelection: Function;
};
