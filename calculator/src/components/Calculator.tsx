import React, {useState} from 'react';

import CalculatorButton from "./CalculatorButton";

function Calculator() {
    const [calculatorState, setCalculatorState] = useState<CalculatorState>({
        currentNumber : '0',
        previousNumber : '',
        operation : '',
        isNewNumber : true,
    })


    const handleButtonClear = () => {}
    const handleOperatorClick = (operator) => {}
    const handleNumberClick = (event) =>{
        const value = event.target.value;
        setCalculatorState((prevState) => {
            const { currentNumber, isNewNumber } = prevState;
            return {
                ...prevState,
                currentNumber: isNewNumber ? value : currentNumber + value,
                isNewNumber: false,
            };
        });
    }

    const buttonConfigs : ButtonConfig[] = [
        {value:"C", className: "clear" , onClick: handleButtonClear},
        {value:"/", className: "operator" , onClick: handleOperatorClick},
        {value:"1", className: "" , onClick: handleNumberClick},
        {value:"2", className: "" , onClick: handleNumberClick},
        {value:"3", className: "" , onClick: handleNumberClick},
        {value:"*", className: "operator" , onClick: handleOperatorClick},
        {value:"4", className: "" , onClick: handleNumberClick},
        {value:"5", className: "" , onClick: handleNumberClick},
        {value:"6", className: "" , onClick: handleNumberClick},
        {value:"+", className: "operator" , onClick: handleOperatorClick},
        {value:"7", className: "" , onClick: handleNumberClick},
        {value:"8", className: "" , onClick: handleNumberClick},
        {value:"9", className: "" , onClick: handleNumberClick},
        {value:"-", className: "operator" , onClick: handleOperatorClick},
        {value:".", className: "dot" , onClick: handleOperatorClick},
        {value:".", className: "operator result" , onClick: handleOperatorClick},

    ]


    return (
        <article className="calculator">
            <form name="forms">
                <input type="text" name="output" value={calculatorState.currentNumber} readOnly />
                {buttonConfigs.map((data) => {
                    return(
                        <>
                            <CalculatorButton
                                type="button"
                                className={data.className}
                                value={data.value}
                                onClick={data.onClick}
                            />
                        </>
                    )
                })}
            </form>
        </article>
    );
}

export default Calculator;