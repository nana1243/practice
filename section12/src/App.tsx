import './App.css'
import React, {useCallback, useEffect, useMemo, useState, Suspense} from "react";

const ChildA = React.lazy(() => import('./components/ChildA'));
const ChildC = React.lazy(() => import('./components/ChildC'));

const initialItems = new Array(29_999_999).fill(0).map((_, index) => {
    return {
        id: index,
        selected: index ===29_999_998
    };
});

function App() {
    const  [count,setCount] = useState(0);
    const [isShow, setIsShow] = useState(false);

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
            <button onClick={()=> setIsShow(!isShow)}>Click Me</button>
            {/*<p>selected : {selectedItems.id}</p>*/}
            {isShow && (
                <>
                    <Suspense fallback={<div>Loading ChildA...</div>}>
                        <ChildA increment={incrementCountV2}/>
                    </Suspense>

                    <Suspense fallback={<div>Loading ChildC...</div>}>
                        <ChildC />
                    </Suspense>
                </>
            )}

        </>
  )
}

export default App
