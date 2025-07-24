import React, {useId} from 'react';

type CheckBoxProps = React.ComponentProps<'input'> & {
    type?: 'checkbox';
    parentClassName?: string;
}

function CheckBox(props:CheckBoxProps){
    const {parentClassName, children , ...rest } = props;
    const uuid = useId();

    return (
        <>
            <div className={parentClassName}>
                <input id={uuid} {...rest} />
                <label htmlFor={uuid}>{children}</label>
            </div>

        </>
    );
}

export default CheckBox;