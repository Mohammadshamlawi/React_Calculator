import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
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
    const operations = ["+", "-", "\u00d7", "÷", "%", "."];

    function handleButtonClick(num) {
        let val = "0";
        if (num === "back") {
            if (value !== "undefined" && value !== "0" && value.length > 0)
                val = value.substring(0, value.length - 1);
        } else if (
            value === "undefined" ||
            (value === "0" && !operations.includes(num))
        ) {
            val = num;
        } else {
            val = value + num.toString();
        }

        updateValue(val);
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

        val = val === "" ? "0" : val;

        updateValue(val);
    }

    function clear() {
        updateValue("0");
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="output">{value}</div>
                <div className="calculator">
                    <div className="center_calc">
                        <div className="calculator__keys">
                            <OperatorButton operation={"C"} onClick={clear} />
                            <OperatorButton
                                operation={"\u00d7"}
                                onClick={() => handleButtonClick("\u00d7")}
                            />
                            <OperatorButton
                                operation={"÷"}
                                onClick={() => handleButtonClick("÷")}
                            />
                            <OperatorButton
                                operation={
                                    <FontAwesomeIcon icon={faDeleteLeft} />
                                }
                                onClick={() => handleButtonClick("back")}
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
                            <OperatorButton
                                operation={"+"}
                                onClick={() => handleButtonClick("+")}
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
                            <OperatorButton
                                operation={"-"}
                                onClick={() => handleButtonClick("-")}
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
                            <OperatorButton
                                operation={"%"}
                                onClick={() => handleButtonClick("%")}
                            />
                            <NumberButton
                                value={0}
                                onClick={() => handleButtonClick("0")}
                            />
                            <OperatorButton
                                operation={"."}
                                onClick={() => handleButtonClick(".")}
                            />
                            <button
                                className="calculator__key calculator__key--enter"
                                onClick={printResult}
                            >
                                =
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
