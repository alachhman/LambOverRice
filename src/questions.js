import './box.css'
import {useState} from "react";

let Questions = () => {
    const [answers, setAnswers] = useState({
        budget: 0,
        meat: "",
        carb: "",
        bev: ""
    })

    const [i, setI] = useState(0)
    const [choice, setChoice] = useState("")

    const pool = [
        {
            question: "What's your budget?",
            type: "text",
            choices: [],
            on: () => {
            }
        },
        {
            question: "Lamb or Chicken?",
            type: "button",
            choices: ["Lamb", "Chicken", "Falafel", "Combo"],
            on: () => {
            }
        },
        {
            question: "Rice or Pita?",
            type: "button",
            choices: ["Rice", "Pita"],
            on: () => {
            }
        },
        {
            question: "Need a beverage?",
            type: "button",
            choices: ["Yes", "No"],
            on: () => {
            }
        },
    ]

    const handleNext = () => {
        if (i + 1 >= pool.length) {
            console.log(answers)
        } else {
            setI(i + 1)
        }
    }

    const InputQuestion = () => <input type="number"/>;

    const RadioQuestion = (props) => {
        const question = props.q;
        const setChoice = props.set;
        return <>
            {question.choices.map((x, i) => <button onClick={() => setChoice(x)} key={i}>{x}</button>)}
        </>
    }

    return <div className="questionContainer fadeIn">
        <div className="questionText">
            {pool[i].question}
        </div>
        {
            pool[i].type === "text"
                ? <InputQuestion/>
                : <RadioQuestion set={setChoice} q={pool[i]}/>
        }
        <button className="advanceButton" onClick={() => handleNext()}>
            {i + 1 >= pool.length ? "Submit" : "Next"}
        </button>
    </div>


}

export default Questions
