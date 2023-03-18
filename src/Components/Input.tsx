import React, {ChangeEvent} from 'react';

type PropType = {
    newTitle: string
    setNewTitle: (newTitle: string) => void
    callback:()=>void
}

export const Input = (props: PropType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(e.currentTarget.value)
    }

const onKeyDownHandler = (e:React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key==='Enter') {
      props.callback()
  }
}
    return (
        <div>
            <input onKeyDown={onKeyDownHandler}  value={props.newTitle} type={'text'} onChange={onChangeHandler}/>
        </div>
    );
};




