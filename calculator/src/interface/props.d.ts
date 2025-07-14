import React from "react";

interface ButtonConfig  {
    value : string;
    className : string;
    onClick : (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface CalculatorState {
    currentValue: string;
    previousValue: string;
    operation: string;
    isNewNumber: boolean;
}