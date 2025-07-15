import React, {useState} from 'react';

import CalculatorButton from "./CalculatorButton";

function Calculator() {
    const [calculatorState, setCalculatorState] = useState<CalculatorState>({
        currentNumber : '0',
        previousNumber : '',
        operation : '',
        isNewNumber : true,
    })

    const operate = (previousNumber, currentNumber, operation) => {
        switch (operation) {
            case '+':
                return parseFloat(previousNumber) + parseFloat(currentNumber);
            case '-':
                return parseFloat(previousNumber) - parseFloat(currentNumber);
            case '*':
                return parseFloat(previousNumber) * parseFloat(currentNumber);
            case '/':
                return parseFloat(previousNumber) / parseFloat(currentNumber);
            case '=':
                return currentNumber;
            default:
                return currentNumber;

        }
    }

    const handleButtonClear = (event) => {
        setCalculatorState({
            currentNumber: '0',
            previousNumber: '',
            operation: '',
            isNewNumber: true,
        });
    }

    const handleDot = (event) => {
        if (calculatorState.currentNumber.includes('.')) {
            return; // 소숫점이 이미 있는 경우 아무 작업도 하지 않음
        }
        setCalculatorState((prevState) => ({
            ...prevState,
            currentNumber: prevState.currentNumber + '.' ,
            isNewNumber: false,
        }));

    }

    const handleOperatorClick = (event) => {
        const value = event.target.value;
        console.log('this is value',value);
        setCalculatorState((prevState) => {
            const { currentNumber, previousNumber, operation, isNewNumber } = prevState;
            console.log('isNewNumber:', isNewNumber);
            if (isNewNumber && operation) {
                return {
                    ...prevState,
                    operation: value,
                };
            }
            if (previousNumber && operation) {
                const result = operate(previousNumber, currentNumber, operation);
                return {
                    currentNumber: String(result),
                    previousNumber: String(result),
                    operation: value,
                    isNewNumber: true,
                };
            }
            return {
                ...prevState,
                previousNumber: currentNumber,
                operation: value,
                isNewNumber: true,
            };
        });



    }
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
        {value:".", className: "dot" , onClick: handleDot},
        {value:"=", className: "operator result" , onClick: handleOperatorClick},

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