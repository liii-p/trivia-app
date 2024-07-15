export type QuestionType = {
  results: [
    {
      question: string;
      correct_answer: string;
      incorrect_answers: string[];
    }
  ];
};

export type MenuType = {
  onStart: Function;
  difficultyFunc: Function;
  difficultyOptions: string[];
  selectDifficulty: string;
};

export type ActiveGameType = {
  urlArgs: string;
};

export type DropdownProps = {
  selectDifficulty: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  difficultySelection: Function;
};
