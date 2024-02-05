import { useState } from "react";
import "./App.css";

function NumberButton({ value, onClick }) {
    return (
        <button
            onClick={onClick}
            className="calculator__key py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none 
            bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
        >
            {value}
        </button>
    );
}

function OperatorButton({ operation, onClick }) {
    return (
        <button
            onClick={onClick}
            className="calculator__key calculator__key--operator py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 
            focus:outline-none bg-white rounded-full border border-gray-200 hover:text-blue-700"
        >
            {operation}
        </button>
    );
}

function App() {
    const [value, updateValue] = useState("");

    function handleButtonClick(num) {
        value === "undefined"
            ? updateValue(num)
            : updateValue(value + num.toString());
    }

    function printResult() {
        if (value === "undefined") return;
        let val;
        try {
            val =
                // eslint-disable-next-line no-eval
                eval(
                    value
                        .replace(/÷/gi, "/")
                        .replace(/\u00d7|--/gi, (x) => (x === "--" ? "+" : "*"))
                ) || "";
        } catch (error) {
            val = "undefined";
        }
        updateValue(val);
    }

    function clear() {
        updateValue("");
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="calculator">
                    <div className="calculator__output">{value}</div>
                    <div className="calculator__keys">
                        <OperatorButton
                            operation={"+"}
                            onClick={() => handleButtonClick("+")}
                        />
                        <OperatorButton
                            operation={"-"}
                            onClick={() => handleButtonClick("-")}
                        />
                        <OperatorButton
                            operation={"\u00d7"}
                            onClick={() => handleButtonClick("\u00d7")}
                        />
                        <OperatorButton
                            operation={"÷"}
                            onClick={() => handleButtonClick("÷")}
                        />
                        <NumberButton
                            value={7}
                            onClick={() => handleButtonClick("7")}
                        />
                        <NumberButton
                            value={8}
                            onClick={() => handleButtonClick("8")}
                        />
                        <NumberButton
                            value={9}
                            onClick={() => handleButtonClick("9")}
                        />
                        <NumberButton
                            value={4}
                            onClick={() => handleButtonClick("4")}
                        />
                        <NumberButton
                            value={5}
                            onClick={() => handleButtonClick("5")}
                        />
                        <NumberButton
                            value={6}
                            onClick={() => handleButtonClick("6")}
                        />
                        <NumberButton
                            value={1}
                            onClick={() => handleButtonClick("1")}
                        />
                        <NumberButton
                            value={2}
                            onClick={() => handleButtonClick("2")}
                        />
                        <NumberButton
                            value={3}
                            onClick={() => handleButtonClick("3")}
                        />
                        <NumberButton
                            value={"."}
                            onClick={() => handleButtonClick(".")}
                        />
                        <NumberButton
                            value={0}
                            onClick={() => handleButtonClick("0")}
                        />
                        <NumberButton value={"C"} onClick={clear} />
                        <button
                            className="calculator__key calculator__key--enter"
                            onClick={printResult}
                        >
                            =
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
