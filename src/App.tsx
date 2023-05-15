import "./App.css";
import { useState } from "react";
import { Numbers } from "./components/Numbers";
import Keys from "./components/Keys";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState(1);
  const [currentInput, setCurrentInput] = useState<string>("");

  const handleButtonPress = (buttonValue: string): void => {
    if (buttonValue === ".") {
      setCurrentInput((prevInput) =>
        prevInput.includes(".") ? prevInput : prevInput + "."
      );
    } else if (buttonValue === "DEL") {
      setCurrentInput((prevInput) => prevInput.slice(0, -1));
    } else if (buttonValue === "=") {
      setCurrentInput(eval(currentInput));
    } else {
      setCurrentInput((prevInput) =>
        prevInput === "0" ? buttonValue : prevInput + buttonValue
      );
    }
  };

  const handleReset = (): void => {
    setCurrentInput("");
  };

  return (
    <div className="App">
      <main className={`main-${theme}`}>
        <Header theme={theme} setTheme={setTheme} />

        <input
          type="text"
          value={currentInput}
          className={`input-${theme}`}
          onChange={(e) => {
            console.log(e.target.value);
            e.target.value.includes("=")
              ? setCurrentInput(eval(currentInput))
              : setCurrentInput(e.target.value);
          }}
        />
        <div className={`numboard-${theme}`}>
          <div className="numgrid">
            {Numbers.map((elem, index) => (
              <Keys
                key={index}
                num={elem}
                handler={handleButtonPress}
                classname={
                  elem !== "DEL"
                    ? `keys-${theme}`
                    : `keys-${theme} del-${theme}`
                }
              />
            ))}
          </div>
          <div className="action">
            <div onClick={handleReset} className={`reset-${theme}`}>
              RESET
            </div>
            <div
              onClick={() => handleButtonPress("=")}
              className={`result-${theme}`}
            >
              =
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
