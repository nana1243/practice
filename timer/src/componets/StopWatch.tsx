import React from 'react';
import ControlButton from "./ControlButton";
import RestButton from "./RestButton";


function StopWatch() {


    const formatTime = (ms: number) => {
        const minutes = Math.floor(ms / 60000);
        const seconds = Math.floor((ms % 60000) / 1000);
        const milliseconds = Math.floor((ms % 1000) / 10);

        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
    };


    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                    <div className="text-5xl font-mono font-semibold text-gray-800 dark:text-white">
                        {formatTime(0)}
                    </div>

                    <div className="flex space-x-4">
                        <ControlButton/>
                        <RestButton/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default StopWatch;