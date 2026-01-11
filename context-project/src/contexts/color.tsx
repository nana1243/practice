import {createContext} from "react";

const ColorContext = createContext({
    state: {color: 'blue', subColor: 'red'},
    actions: {
        setColor: (color: string) => {
        },
        setSubColor: (subColor: string) => {
        }
    }
});

export default ColorContext;