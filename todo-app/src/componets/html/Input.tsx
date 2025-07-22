import React from 'react';

type ReactInputType = React.InputHTMLAttributes<HTMLInputElement>['type'];
type InputProps = Omit<React.ComponentProps<'input'>, 'type'> & {
    type?: Exclude<ReactInputType, 'radio' | 'checkbox'>
}

function Input(props: InputProps) {
    const { ...rest } = props;

    return (
        <>
            <input {...rest} />
        </>
    );
}

export default Input;