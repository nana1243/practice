import React, {useEffect, useState} from 'react';
import ControlButton from "./ControlButton";
import RestButton from "./RestButton";
import formatTime from "../utils/formatTime";
import parseTime from "../utils/parseTime";


function StopWatch() {
    const [currentTime, setCurrentTime] = useState(formatTime(0));
    const [isRunning, setIsRunning] = useState(true);
    const handleClick = () => {
        setIsRunning(!isRunning);
    };
    const handleRest = () => {
        setIsRunning(false);
        setCurrentTime(formatTime(0));
    }

    useEffect(()=>{
        let timer: NodeJS.Timeout | null = null;
        if (isRunning) {
            timer = setInterval(() => {
                setCurrentTime((prevTime) => {
                    const prevMs = parseTime(prevTime);
                    return formatTime(prevMs + 10);
                });
            }, 10);
        } else {
            clearInterval(timer!);

        }
        return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
    },[isRunning])




    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
                <div className="flex flex-col items-center justify-center space-y-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                    <div className="text-5xl font-mono font-semibold text-gray-800 dark:text-white">
                        {currentTime}
                    </div>

                    <div className="flex space-x-4">
                        <ControlButton isRunning={isRunning} handleClick={handleClick}/>
                        <RestButton isRunning={isRunning} handleClick={handleRest} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default StopWatch;