import './App.css'
import CheckBox from "./components/CheckBox";
import {useEffect, useState} from "react";
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


    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            <ChildA count={count}/>
        </>
  )
}

export default App
