import './App.css'
import React, {useCallback, useEffect, useMemo, useState, Suspense} from "react";
import ChildB from "./components/ChildB";
import {ErrorBoundary} from "react-error-boundary";

const ChildA = React.lazy(() => import('./components/ChildA'));
const ChildC = React.lazy(() => import('./components/ChildC'));

const initialItems = new Array(29_999_999).fill(0).map((_, index) => {
    return {
        id: index,
        selected: index ===29_999_998
    };
});

// resetErrorBoundary는 에러가 발생했을 때, 다시 시도할 수 있는 기능을 제공한다.
const FallbackComponent = ({error, resetErrorBoundary}) => {
    return (
        <div role="alert">
            <p>Something sent wrong....</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    );
}

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

                    <ErrorBoundary
                        FallbackComponent={FallbackComponent}
                    >
                        <Suspense fallback={<div>Loading ChildA...</div>}>
                            <ChildB />
                        </Suspense>
                    </ErrorBoundary>

                    <Suspense fallback={<div>Loading ChildC...</div>}>
                        <ChildC />
                    </Suspense>
                </>
            )}

        </>
  )
}

export default App
