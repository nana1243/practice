import ColorContext from "../contexts/color";
import {useContext} from "react";

const ColorConsumer = () => {
    // <ColorContext.Consumer></ColorContext.Consumer> 방식 대신 useContext 훅을 사용
    const {state, actions} = useContext(ColorContext);

    return (
        <>
            <div>
                <h1 style={{color: state.color}}>This is the main color</h1>
                <h2 style={{color: state.subColor}}>This is the sub color</h2>
                <button onClick={actions.setColor}>Change Color</button>
                <button onClick={actions.setSubColor}>Change Sub Color</button>
            </div>

        </>
    )
}


export default ColorConsumer;