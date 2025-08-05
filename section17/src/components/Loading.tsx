import React, {useEffect} from 'react';

function Loading() {
    const [isShow, setIsShow] = React.useState();

    useEffect(()=>{
        const timer = setTimeout(() => {
            setIsShow(true);
        }, 500);
        return ()=> {
            clearTimeout(timer);
        }
    },[])


    return (
        <div>
            {isShow && <p>Loading...</p>}
        </div>
    );
}

export default Loading;