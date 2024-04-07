import './box.css'
import {useState} from "react";
import InputQuestion from "./components/inputQuestions";
import RadioQuestion from "./components/radioQuestion";
import ConfirmationQuestion from "./components/confirmationQuestion";
import Results from "./components/results";

let Questions = () => {
	const [budget, setBudget] = useState(0)
	const [meat, setMeat] = useState("")
	const [carb, setCarb] = useState("")
	const [bev, setBev] = useState("")

	const [i, setI] = useState(0)
	const [choice, setChoice] = useState("")
	const [done, setDone] = useState(false)

	const isNotLastPage = () => i + 1 < pool.length

	const pool = [
		{
			question: "What's your budget?",
			type: "text",
			choices: [],
			on: () => setBudget(parseInt(choice))
		},
		{
			question: "Lamb or Chicken?",
			type: "button",
			choices: ["Lamb", "Chicken", "Falafel", "Combo"],
			on: () => setMeat(choice)
		},
		{
			question: "Rice or Pita?",
			type: "button",
			choices: ["Rice", "Pita", "Either"],
			on: () => setCarb(choice)
		},
		{
			question: "Need a beverage?",
			type: "button",
			choices: ["Yes", "No"],
			on: () => setBev(choice)
		},
		{
			question: "Is this correct?",
			type: "confirm",
			choices: [],
			on: () => setI(0)
		}
	]

	const handleNext = (on) => {
		if (choice !== "") {
			on()
			setChoice("")
			setI(i + 1)
		}
	}

	const handleSubmit = (on) => {
		on()
		setChoice("")
		setDone(true)
	}

	const handleReset = () => {
		setChoice("")
		setBudget(0)
		setMeat("")
		setCarb("")
		setBev("")
		setI(0)
	}

	if (done) return <Results results={{budget, meat, carb, bev}}/>

	return (
		<div className="questionContainer fadeIn">
			<div className="questionText">
				{pool[i].question}
			</div>
			{
				pool[i].type === "text"
					? <InputQuestion set={setChoice} value={choice}/>
					: pool[i].type === "button"
						? <RadioQuestion choice={choice} set={setChoice} q={pool[i]}/>
						: <ConfirmationQuestion results={{budget, meat, carb, bev}}/>
			}
			{
				isNotLastPage()
					? <button className="advanceButton" onClick={() => handleNext(pool[i].on)}>
						Next
					</button>
					: <div className="buttonGroup">
						<button className="advanceButton backButton" onClick={() => handleReset()}>
							Nope, Start Over
						</button>
						<button className="advanceButton" onClick={() => handleSubmit(pool[i].on)}>
							Yep!
						</button>
					</div>
			}
		</div>
	)
}


export default Questions
