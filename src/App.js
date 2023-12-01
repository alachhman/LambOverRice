import React, {useEffect, useState} from 'react';
import './App.css';
import './box.css';

let boxStyle = {
    marginLeft: "19px",
    marginTop: "19px",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    transition: "all 0.3s ease",
    overflow: "hidden"
}

function App() {
    const [animDone, setAnimDone] = useState(false)
    const [questionText, setQuestionText] = useState("How Much Halal Can I Afford?")

    useEffect(() => {
        setTimeout(() => {
            setAnimDone(true)
        }, 3000)
    }, []);

    return (
        <div className="container">
            <div className="box">
                <div className="title" style={boxStyle}>
                    🥙
                    {
                        animDone &&
                        <h3 className="titleText" style={{marginLeft: "16px"}}>
                            How Much Halal Can I Afford?
                        </h3>
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
