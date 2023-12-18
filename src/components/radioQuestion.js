import React from 'react';

const RadioQuestion = ({ choice, set, q }) => {
    const handleClick = (value) => {
        set(value);
    };

    return (
        <div className="radioButtons">
            {q.choices.map((x, i) => (
                <button
                    className={x === choice ? "radioChoicePicked" : "radioChoice"}
                    onClick={() => handleClick(x)}
                    key={i}
                >
                    {x}
                </button>
            ))}
        </div>
    );
}

export default RadioQuestion;
