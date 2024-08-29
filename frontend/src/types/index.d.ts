export type QuestionType = {
    [key: number]: any;
    results: [
        {
            question: string;
            correct_answer: string;
            incorrect_answers: string[];
        }
    ];
};
export type GameOverType = {
    points: number;
};
export type QuestionCardType = {
    selectDifficulty: string;
};
export type MenuType = {
    setInvisible: React.MouseEventHandler<HTMLButtonElement>;
    difficultyFunc: Function;
    difficultyOptions?: string[];
    selectDifficulty: string;
};
export type DropdownProps = {
    selectDifficulty?: string[];
    showDropDown?: boolean;
    toggleDropDown?: Function;
    difficultySelection: Function;
};
