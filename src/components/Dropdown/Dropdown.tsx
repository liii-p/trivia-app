import { useEffect, useState } from "react";

type DropdownProps = {
    selectDifficulty: string[];
    showDropDown: boolean;
    toggleDropDown: Function;
    difficultySelection: Function;
};

const Dropdown: React.FC<DropdownProps> = ({ 
    selectDifficulty,
    difficultySelection,
    }: DropdownProps): JSX.Element => {

    const [showDropDown, setShowDropDown] = useState<boolean>(false);

    const onClickHandler = (difficulty: string): void => {
        difficultySelection(difficulty);
    };

    useEffect(() => {
        setShowDropDown(showDropDown);
    }, [showDropDown])
    
    return (
        <>
        {/* Check whether show dropdown is true/false and apply the corresponding styling */}
            <div className={showDropDown ? 'dropdown' : 'dropdown__active'}>
                {selectDifficulty.map(
                    (difficulty: string, index: number): JSX.Element => {
                        // dynamically show all the difficulties when the dropdown is activated
                        return (
                            <p key={index}
                            onClick={(): void => {
                                onClickHandler(difficulty);
                            }}>
                                {difficulty}
                            </p>
                        );
                    }
                )}
            </div>
        </>
    );
};

export default Dropdown;