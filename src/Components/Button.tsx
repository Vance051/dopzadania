import React from 'react';


type PropsType = {
    callback: () => void
}


export const Button = (props: PropsType) => {
    const onclickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onclickHandler}>+</button>
    );
};
