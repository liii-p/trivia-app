export type QuestionType = {
  results?: [
    {
      question: string;
      correct_answer: string;
      incorrect_answers: string[];
    }
  ];
  request?: string;
};

export type MenuType = {
  setInvisible: any;
  difficultyFunc: Function;
  difficultyOptions: string[];
  selectDifficulty: string;
};

export type ActiveGameType = {
  selectDifficulty: string;
};

export type DropdownProps = {
  selectDifficulty: string[];
  showDropDown: boolean;
  toggleDropDown: Function;
  difficultySelection: Function;
};
