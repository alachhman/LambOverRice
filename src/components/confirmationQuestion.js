import React from 'react';

const ConfirmationQuestion = (props) => {
    const results = props.results
    return (
        <div className={"resultsContainer"}>
            <div>You have ${results.budget} to spend on</div>
            <div>
                {
                    results.carb === "Either"
                        ? results.meat + " over rice, or in a gyro,"
                        : results.meat + (results.carb === "Rice") ? " over rice," : " gyro,"
                }
            </div>
            <div>
                and you {(results.bev === "Yes" ? "" : " don't")} want a beverage?
            </div>
        </div>
    );
}

export default ConfirmationQuestion;