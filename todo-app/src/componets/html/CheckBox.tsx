import React from 'react';

type CheckBoxProps = React.ComponentProps<'input'> & {
    type?: 'checkbox';
    parentClassName?: string;
}

function CheckBox(props:CheckBoxProps){
    const {parentClassName, children , ...rest } = props;

    return (
        <>
            <div className={parentClassName}>
                <input {...rest} />
                <label>{children}</label>
            </div>

        </>
    );
}

export default CheckBox;