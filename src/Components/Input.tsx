import React, {ChangeEvent} from 'react';

type PropType = {
    newTitle: string
    setNewTitle: (newTitle: string) => void
}

export const Input = (props: PropType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(e.currentTarget.value)
    }


    return (
        <div>
            <input  value={props.newTitle} type={'text'} onChange={onChangeHandler}/>
        </div>
    );
};




