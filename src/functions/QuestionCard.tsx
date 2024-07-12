import { useState, useEffect } from "react";


const QuestionCard = () => {
    const [questions, setQuestions] = useState([]);
    console.log("QuestionCard activated")

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('https://opentdb.com/api.php?amount=1&type=multiple');
                const result = await response.json();
                setQuestions(result);
                console.log(JSON.stringify(result))
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchQuestions();
    }, []);

    return(
        // Here we will either display the data or if it's not yet loaded, display some loading text
        <div>
            {questions ? (
                <RenderData data={questions} />
            ) : (
                <p>Loading...</p>
            )}            
        </div>
    );

};

type DataProps = {
    data: any;
};

const RenderData = ({ data }: DataProps) => {
    return (
        <div >
            <h2>{data.question}</h2>
            <button>{data.correct_answer}</button>
            <button>{data.incorrect_answers}</button>
            <button>{data.incorrect_answers}</button>
            <button>{data.incorrect_answers}</button>
        </div>
    );
};

export default QuestionCard;