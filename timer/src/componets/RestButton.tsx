import React from 'react';
import { RotateCcw } from "lucide-react";

interface RestButtonProps {
    isRunning: boolean;
    handleClick: () => void;
}

function RestButton(props: RestButtonProps) {

    const { isRunning, handleClick } = props;

    return (
        <>
            <button
                className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
                onClick={handleClick}
            >
                <RotateCcw size={24} />
            </button>
        </>
    );
}

export default RestButton;