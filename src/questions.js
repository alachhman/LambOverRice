import './box.css'

const pool = [
    {
        question: "What's your budget?",
        type: "text",
        choices: []
    },
    {
        question: "Lamb or Chicken?",
        type: "radio",
        choices: ["Lamb", "Chicken", "Falafel", "Combo"]
    },
    {
        question: "Rice or Pita?",
        type: "radio",
        choices: ["Rice", "Pita"]
    },
    {
        question: "Need a beverage?",
        type: "radio",
        choices: ["Yes", "No"]
    },
]

let Questions = (props) => {
    const setQuestionText = props.setQuestionText;
    const index = 0;
    const Question = () => {
        let q = pool[index]
        switch (q.type) {
            case "text": return <TextInput q={q}/>
        }
    }

    const TextInput = (props) => {
        return (
            <div className="questionText">
                <p>{props.q.question}</p>
            </div>
        )
    }

    return (
        <div>
            <Question/>
        </div>
    )
}

export default Questions