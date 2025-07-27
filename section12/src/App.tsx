import './App.css'
import {useCallback, useEffect, useMemo, useState} from "react";
// import ChildA from "./components/ChildA";

const initialItems = new Array(29_999_999).fill(0).map((_, index) => {
    return {
        id: index,
        selected: index ===29_999_998
    };
});

function App() {
    const  [count,setCount] = useState(0);

    // 연산비용이 높음
    // const selectedItems = initialItems.find(item => item.selected);

    const selectedItems = useMemo(() => initialItems.find(item=> item.selected), []);


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
            <p>selected : {selectedItems.id}</p>
            {/*<ChildA increment={incrementCountV2}/>*/}
        </>
  )
}

export default App
