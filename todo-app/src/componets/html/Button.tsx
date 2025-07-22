import React from 'react';

type ButtonProps = React.ComponentProps<'button'>;

function Button(props :ButtonProps){
    const { children, ...rest } = props;
    return (
        <>
            <button {...rest}>{children}</button>
        </>
    );
}

export default Button;