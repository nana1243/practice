import './App.css'
import CheckBox from "./components/CheckBox";
import {useCallback, useEffect, useState} from "react";
import ChildA from "./components/ChildA";

function App() {
    const  [count,setCount] = useState(0);

    useEffect(()=> {
        console.log('App mounted');

        // Cleanup function
        return () => {
            console.log('App unmounted');
        }
    },[])

    useEffect(() => {
        console.log('Count changed:', count);
    }, [count]);

    // const incrementCount = () => {
    //     setCount(prevCount => prevCount + 1);
    // }

    const incrementCountV2 = useCallback(
        () => {
            setCount(prevCount => prevCount + 1);
        },
        [],
    );



    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={incrementCountV2}>Click Me</button>
            <ChildA increment={incrementCountV2}/>
        </>
  )
}

export default App
