import { useState, useEffect } from "react";


const QuestionCard = ({BASE_URL}: {BASE_URL:any}) => {
    const [questions, setQuestions] = useState([]);
    console.log("QuestionCard activated")
    let controller = new AbortController();
    const signal = controller.signal;

    const fetchQuestions = async () => {
        // this function calls the API and sets the result via setQuestions
        try {
            const response = await fetch(`${BASE_URL}?amount=10&difficulty=easy&type=multiple`, {signal});
            const result = await response.json();
            setQuestions(result);
            console.log(JSON.stringify(result))
        }
        catch (error: any) {
            // if any error occurs, catch it here.
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        // declare fetchQuestions outside of useEffect and call inside here
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
    // Here is where the data is supposed to be rendered.
    return (
        <div>
            <h2>{data.question}</h2>
            <button>{data.correct_answer}</button>
            <button>{data.incorrect_answers}</button>
            <button>{data.incorrect_answers}</button>
            <button>{data.incorrect_answers}</button>
        </div>
    );
};

export default QuestionCard;