import React from 'react';
import { RotateCcw } from "lucide-react";

function RestButton(props) {
    return (
        <>
            <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors">
                <RotateCcw size={24} />
            </button>
        </>
    );
}

export default RestButton;