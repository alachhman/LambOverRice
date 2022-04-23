import React from 'react';
import './App.css';

const prices = {
    rice: 6,
    gyro: 4,
    drink: 1
}

function App() {
    let [riceOut, setRiceOut] = React.useState(null);
    let [gyroOut, setGyroOut] = React.useState(null);
    let [meatPref, setMeatPref] = React.useState("Lamb");
    let [currency, setCurrency] = React.useState("USD");

    const toggleMeat = () => {
        console.log("Test")
        setMeatPref(value => (value === "Lamb") ? "Chicken" : "Lamb")
    }
    const updateOutput = (x) => {
        let input = x.target.value;
        let data = {
            prefRice: {
                rice: Math.floor(input / prices.rice),
                gyro: Math.floor(input % prices.rice / prices.gyro),
                drink: (input < prices.gyro) ? input / prices.drink : Math.floor(input % prices.rice % prices.gyro / prices.drink)
            },
            prefGyro: {
                gyro: Math.floor(input / prices.gyro),
                drink: (input < prices.gyro) ? input / prices.drink : Math.floor(input % prices.gyro / prices.drink)
            }
        }
        setRiceOut(outputRender(data.prefRice));
        setGyroOut(outputRender(data.prefGyro));
    }
    const outputRender = (data) => {
        return (
            (data.rice <= 0 && data.gyro <= 0 && data.drink <= 0) ? null :
                <p>
                    {
                        data.rice > 0 ? <div>
                            {data.rice + " " + meatPref + " Over Rice"}
                        </div> : ""
                    }

                    {
                        data.gyro > 0 ? <div>
                            {data.gyro + " " + meatPref + " Gyro"}
                        </div> : ""
                    }

                    {
                        data.drink > 0 ? <div>
                            {((data.rice > 0 || data.gyro > 0) ? "and " : "") + data.drink + " drinks"}
                        </div> : ""
                    }
                </p>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="App-logo" onClick={() => {
                    toggleMeat()
                }}>🥙
                </div>
                <p>
                    $
                    <input className={"Input"} type="number" name="name" max={1000000} min={0} placeholder={6}
                           onChange={(x) => {
                               updateOutput(x)
                           }}/>
                    will get you:
                </p>
                <p>
                    {"Nothing." && riceOut}
                    {(riceOut || gyroOut) ? "---- OR ----" : null}
                    {"Nothing." && gyroOut}
                </p>
            </header>
        </div>
    );
}

export default App;
