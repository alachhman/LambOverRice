import React from 'react';

const ConfirmationQuestion = ({results}) => {
    return (
        <div className={"resultsContainer"}>
            <div>You have ${results.budget} to spend on</div>
            <div>
                {
                    results.carb === "Either"
                        ? results.meat.toLocaleLowerCase() + " over rice, or in a gyro,"
                        : results.meat.toLocaleLowerCase() + (results.carb === "Rice") ? " over rice," : " gyro,"
                }
            </div>
            <div>
                and you {(results.bev === "Yes" ? "" : " don't")} want a beverage.
            </div>
        </div>
    );
}

export default ConfirmationQuestion;