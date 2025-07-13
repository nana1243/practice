import React from 'react';

interface CalculatorButtonProps {
    type: string;
    className: string;
    value: string;
    onClick :(event: React.MouseEvent<HTMLInputElement>) => void;
}

function CalculatorButton(props: CalculatorButtonProps) {
    const { type, className, value, onClick } = props;

    return (
        <>
            <input
                type="button"
                className={className}
                value={value}
                onClick={onClick}
            />
        </>
    );
}

export default CalculatorButton;