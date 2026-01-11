import ColorContext from "../contexts/color";
import ColorConsumer from "./ColorConsumer";
import {useState} from "react";

const RANDOM_COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const RANDOM_SUB_COLORS = ['pink', 'cyan', 'lime', 'teal', 'lavender', 'brown', 'gray'];

const ColorProvider = () => {
    const [color, setColor] = useState({color: 'orange', subColor: 'blue'});
    const value = {
        state: color,
        actions: {
            setColor: () => {
                const color = RANDOM_COLORS[Math.floor(Math.random() * RANDOM_COLORS.length)];
                setColor(prev => ({...prev, color}));
            },
            setSubColor: () => {
                const subColor = RANDOM_SUB_COLORS[Math.floor(Math.random() * RANDOM_SUB_COLORS.length)];
                setColor(prev => ({...prev, subColor}));
            }
        }
    };


    return (
        <>
            <ColorContext.Provider value={value}>
                {/* 자식 컴포넌트들 */}
                <ColorConsumer/>
            </ColorContext.Provider>
        </>
    )
}


export default ColorProvider;