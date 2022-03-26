import { calculatorButtons } from "../globals/calculator-button-data";
import { useState } from 'react';

function Calculator() {
    const [value, setValue] = useState(0);
    const [result, setResult] = useState("0");
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const [memory, setMemory] = useState(null);

    //digits
    const inputDigit = e => {
        if (waitingForOperand) {
            setResult(e.target?.value.toString());
            setWaitingForOperand(false);
        } else {
            setResult(result === "0" ? e.target?.value.toString() : result + e.target?.value.toString());

            if (value === 0) {
                setValue(e.target?.value);
            } else if (value !== 0 && operator === null && !waitingForOperand) {
                setValue(parseFloat(result + e.target?.value.toString()));
            } else {
                setValue(value)
            }

            console.log(e.target.value, value, result);
        }
    };

    //all clear
    const allClear = () => {
        setValue(0);
        setResult("0");
        setOperator(null);
        setWaitingForOperand(false);
    };

    //clear
    const clear = () => {
        setResult("0");
    };

    //calculation
    const calc = () => {
        const nextValue = parseFloat(result);
        const computedValue = eval(value.toString() + operator.toString() + "(" + nextValue.toString() + ")");

        if (operator === "*") {
            setResult(computedValue);
            setValue(parseFloat(computedValue));
        }     
        if (operator === "/") {
            setResult(computedValue);
            setValue(parseFloat(computedValue));
        }
        if (operator === "+") {
            setResult(computedValue);
            setValue(parseFloat(computedValue));
        }
        if (operator === "-") {
            setResult(computedValue);
            setValue(parseFloat(computedValue));
        }
    };
    
    //input dot
    const dot = () => {
        if (waitingForOperand) {
            setResult(".");
            setWaitingForOperand(false);
        } else if (result.indexOf(".") === -1) {
            setResult(result + ".");
            setWaitingForOperand(false);
        } 
    };

    //toggle sign
    const toggleSign = () => {
        const newValue = parseFloat(result) * -1;
        setResult(newValue.toString());

        if (value !== 0 && operator === null && !waitingForOperand) {
            setValue(newValue);
        };
        // setValue(newValue);
    };

    //percent
    const percent = () => {
        const currentValue = parseFloat(result);

        if (currentValue === 0) {
            return;
        }
        
        const newValue = parseFloat(result) / 100;

        setResult(newValue.toString());
        if (value !== 0 && operator === null && !waitingForOperand) {
            setValue(newValue);
        };
    };

    //square root
    const sqrRoot = () => {
        setResult(parseFloat(Math.sqrt(result)).toString());
        if (value !== 0 && operator === null && !waitingForOperand) {
            setValue(parseFloat(Math.sqrt(result)));
        };
    };

    //operator
    const operatorSign = e => {
        setOperator(e.target?.value);
        setWaitingForOperand(true);
    };

    //memory
    const memoryStore = () => {
        setMemory(result);
    };

    const memoryRecall = () => {
        setResult(memory);
    };

    const memoryClear = () => {
        setMemory(null);
    };

    const memoryPlus = () => {
        setMemory(parseFloat(memory) + parseFloat(result));
    };

    const memoryMinus = () => {
        setMemory(parseFloat(memory) - parseFloat(result));
    };

    return (
        <>
        <div className="display-container">
            <div className="calc-numbers">{result}</div>
        </div>
        <div className="container">
            <button onClick={allClear} type={calculatorButtons[0].type} className={calculatorButtons[0].className} value={calculatorButtons[0].value}>{calculatorButtons[0].text}</button>
            <button onClick={clear} type={calculatorButtons[1].type} className={calculatorButtons[1].className} value={calculatorButtons[1].value}>{calculatorButtons[1].text}</button>
            <button onClick={inputDigit} type={calculatorButtons[2].type} className={calculatorButtons[2].className} value={calculatorButtons[2].value}>{calculatorButtons[2].text}</button>
            <button onClick={inputDigit} type={calculatorButtons[3].type} className={calculatorButtons[3].className} value={calculatorButtons[3].value}>{calculatorButtons[3].text}</button>
            <button onClick={inputDigit} type={calculatorButtons[4].type} className={calculatorButtons[4].className} value={calculatorButtons[4].value}>{calculatorButtons[4].text}</button>
            <button onClick={inputDigit} type={calculatorButtons[5].type} className={calculatorButtons[5].className} value={calculatorButtons[5].value}>{calculatorButtons[5].text}</button>
            <button onClick={inputDigit} type={calculatorButtons[6].type} className={calculatorButtons[6].className} value={calculatorButtons[6].value}>{calculatorButtons[6].text}</button>
            <button onClick={inputDigit} type={calculatorButtons[7].type} className={calculatorButtons[7].className} value={calculatorButtons[7].value}>{calculatorButtons[7].text}</button>
            <button onClick={inputDigit} type={calculatorButtons[8].type} className={calculatorButtons[8].className} value={calculatorButtons[8].value}>{calculatorButtons[8].text}</button>
            <button onClick={inputDigit} type={calculatorButtons[9].type} className={calculatorButtons[9].className} value={calculatorButtons[9].value}>{calculatorButtons[9].text}</button>
            <button onClick={inputDigit} type={calculatorButtons[10].type} className={calculatorButtons[10].className} value={calculatorButtons[10].value}>{calculatorButtons[10].text}</button>
            <button onClick={inputDigit} type={calculatorButtons[11].type} className={calculatorButtons[11].className} value={calculatorButtons[11].value}>{calculatorButtons[11].text}</button>
            <button onClick={operatorSign} type={calculatorButtons[12].type} className={calculatorButtons[12].className} value={calculatorButtons[12].value}>{calculatorButtons[12].text}</button>
            <button onClick={operatorSign} type={calculatorButtons[13].type} className={calculatorButtons[13].className} value={calculatorButtons[13].value}>{calculatorButtons[13].text}</button>
            <button onClick={operatorSign} type={calculatorButtons[14].type} className={calculatorButtons[14].className} value={calculatorButtons[14].value}>{calculatorButtons[14].text}</button>
            <button onClick={operatorSign} type={calculatorButtons[15].type} className={calculatorButtons[15].className} value={calculatorButtons[15].value}>{calculatorButtons[15].text}</button>
            <button onClick={calc} type={calculatorButtons[16].type} className={calculatorButtons[16].className} value={calculatorButtons[16].value}>{calculatorButtons[16].text}</button>
            <button onClick={memoryClear} type={calculatorButtons[17].type} className={calculatorButtons[17].className} value={calculatorButtons[17].value}>{calculatorButtons[17].text}</button>
            <button onClick={memoryRecall} type={calculatorButtons[18].type} className={calculatorButtons[18].className} value={calculatorButtons[18].value}>{calculatorButtons[18].text}</button>
            <button onClick={memoryStore} type={calculatorButtons[19].type} className={calculatorButtons[19].className} value={calculatorButtons[19].value}>{calculatorButtons[19].text}</button>
            <button onClick={memoryPlus} type={calculatorButtons[20].type} className={calculatorButtons[20].className} value={calculatorButtons[20].value}>{calculatorButtons[20].text}</button>
            <button onClick={memoryMinus} type={calculatorButtons[21].type} className={calculatorButtons[21].className} value={calculatorButtons[21].value}>{calculatorButtons[21].text}</button>
            <button onClick={dot} type={calculatorButtons[22].type} className={calculatorButtons[22].className} value={calculatorButtons[22].value}>{calculatorButtons[22].text}</button>
            <button onClick={toggleSign} type={calculatorButtons[23].type} className={calculatorButtons[23].className} value={calculatorButtons[23].value}>{calculatorButtons[23].text}</button>
            <button onClick={percent} type={calculatorButtons[24].type} className={calculatorButtons[24].className} value={calculatorButtons[24].value}>{calculatorButtons[24].text}</button>
            <button onClick={sqrRoot} type={calculatorButtons[25].type} className={calculatorButtons[25].className} value={calculatorButtons[25].value}>{calculatorButtons[25].text}</button>
        </div>
        </>
    )
};

export default Calculator