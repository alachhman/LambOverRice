import React from 'react';

const InputQuestion = ({ set, value }) => {
    return (
        <div className="dollarSign">
            <input
                value={value}
                onChange={(event) => set(event.target.value)}
                className="inputBox"
                type="number"
                //ToDo: Figure out how to set an upper bounds to this input
            />
        </div>
    );
}

export default InputQuestion;
