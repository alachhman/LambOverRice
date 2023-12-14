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
            on: () => {setAnswers({...answers, budget: parseInt(choice)})}
        },
        {
            question: "Lamb or Chicken?",
            type: "button",
            choices: ["Lamb", "Chicken", "Falafel", "Combo"],
            on: () => {setAnswers({...answers, meat: choice})}
        },
        {
            question: "Rice or Pita?",
            type: "button",
            choices: ["Rice", "Pita"],
            on: () => {setAnswers({...answers, carb: choice})}
        },
        {
            question: "Need a beverage?",
            type: "button",
            choices: ["Yes", "No"],
            on: () => {setAnswers({...answers, bev: choice})}
        },
    ]

    const handleNext = (on) => {
        console.log(choice)
        if(choice !== "") {
            on()
            setChoice("")
        }

        if (i + 1 >= pool.length) {
            console.log(answers)
        } else {
            setI(i + 1)
        }
    }

    const InputQuestion = (props) => {
        const setChoice = props.set;

        return (
            <div className="dollarSign">
                <input
                    onChange={(event) => setChoice(event.target.value)}
                    className="inputBox"
                    type="number"
                />
            </div>
        )
    }

    const RadioQuestion = (props) => {
        const question = props.q;
        const setChoice = props.set;
        const choice = props.choice;

        const handleClick = (value) => {
            setChoice(value)
        }

        return <div className="radioButtons">
            {
                question.choices.map(
                    (x, i) =>
                        <button
                            className={x === choice ? "radioChoicePicked" : "radioChoice"}
                            onClick={() => handleClick(x)} key={i}
                        >
                            {x}
                        </button>
                )
            }
        </div>
    }

    return <div className="questionContainer fadeIn">
        <div className="questionText">
            {pool[i].question}
        </div>
        {
            pool[i].type === "text"
                ? <InputQuestion set={setChoice}/>
                : <RadioQuestion choice={choice} set={setChoice} q={pool[i]}/>
        }
        <button className="advanceButton" onClick={() => handleNext(() => pool[i].on)}>
            {i + 1 >= pool.length ? "Submit" : "Next"}
        </button>
    </div>


}

export default Questions
