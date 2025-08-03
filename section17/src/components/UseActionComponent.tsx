import {useActionState} from 'react';

function UseActionComponent(props) {
    const [count, formAction, isPending] = useActionState(async (previousState, formData) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return previousState + 1;
    }, 0);

    return (
        <>
            <form action={formAction}>
                <h1>Count : {count}</h1>
                <button type="submit">증가</button>
            </form>
        </>
    );
}

export default UseActionComponent;