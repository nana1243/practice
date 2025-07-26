import React, {useState} from 'react';
import { Pause, Play, RotateCcw } from "lucide-react";

function ControlButton(props) {
    const [isRunning, setIsRunning] = useState(false);

    const handleClick = () => {
        setIsRunning(!isRunning);
    };

    return (
        <>
            {/* 시작중 - "bg-red-500 hover:bg-red-600" */}
            {/* 정지중 - "bg-green-500 hover:bg-green-600" */}
            <button
                className={`p-3 rounded-full transition-colors bg-green-500 hover:bg-green-600 text-white`}
                onClick={handleClick}
            >
                {isRunning ? <Play size={24}/> : <Pause size={24} />}
            </button>
        </>
    );
}

export default ControlButton;