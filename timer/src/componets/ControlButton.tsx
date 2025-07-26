import React from 'react';
import { Pause, Play } from "lucide-react";
import {twMerge} from "tailwind-merge";

interface ControlButtonProps {
    isRunning: boolean;
    handleClick: () => void;
}

function ControlButton(props : ControlButtonProps) {
    const {isRunning, handleClick } = props;

    return (
        <>
            <button
                className={twMerge(`p-3 rounded-full transition-colors`, isRunning ? `bg-red-500 hover:bg-red-600` : `bg-green-500 hover:bg-green-600`, `text-white`)}
                onClick={handleClick}
            >
                {!isRunning ? <Play size={24}/> : <Pause size={24} />}
            </button>
        </>
    );
}

export default ControlButton;