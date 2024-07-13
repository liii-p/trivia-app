import { useState, useEffect } from "react";


const QuestionCard = ({BASE_URL}: {BASE_URL:any}) => {
    const [questions, setQuestions] = useState([]);
    console.log("QuestionCard activated")
    let controller = new AbortController();
    const signal = controller.signal;

    const fetchQuestions = async () => {
        try {
            const response = await fetch(`${BASE_URL}?amount=1&type=multiple`, {signal});
            const result = await response.json();
            setQuestions(result);
            console.log(JSON.stringify(result))
        }
        catch (error: any) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
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