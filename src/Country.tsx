import React from 'react';
import {City} from "./City";
import {BanknotsType, MoneyType} from "./App";

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filter: BanknotsType) => void // давайте подумаем, setFilter -это грузчик, у которого всегда в руках товар
}

export const Country = (props: CountryPropsType) => {
    console.log(props.data)
    const setAll = () => {
        props.setFilterValue('All')
    }

    const setDollars = () => {
        props.setFilterValue('Dollars')
    }

    const setRUBLS = () => {
        props.setFilterValue('RUBLS')
    }

    return (
        <div>
            <button onClick={setAll}>All
            </button>
            <button onClick={setDollars}>Dollars
            </button>
            <button onClick={setRUBLS}>RUBLS
            </button>
            <City data={props.data}/>
        </div>
    );
};

