import React, {useEffect, useState} from 'react';
import './App.css';
import './box.css';
import Questions from "./questions";

function App() {
    const [animTrigger, setAnimTrigger] = useState(false)
    const [animDone, setAnimDone] = useState(false)
    const [showQuestion, setShowQuestion] = useState(false)
    const [questionText, setQuestionText] = useState("How Much Halal Can I Afford?")

    const triggerAnim = () => {
        setAnimTrigger(true)

        setTimeout(() => {
            setAnimDone(true)
            setTimeout(() => {
                setShowQuestion(true)
            }, 550)
        }, 550)
    }

    return (
        <div className="container">
            <div className={"box" + (animTrigger ? " anim" : " hover")} onClick={triggerAnim}>
                <div className="title">
                    🥙
                    {
                        animDone &&
                        <h3 className="titleText" style={{marginLeft: "16px"}}>
                            {questionText}
                        </h3>
                    }
                </div>
                {showQuestion && <Questions/>}
            </div>
        </div>
    );
}

export default App;
