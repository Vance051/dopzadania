import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <>
            <Banknote color={props.money.banknotes === 'Dollars' ? 'forestgreen':'dodgerblue'}>
                <div>{props.money.banknotes}</div>
                <div>{props.money.value}</div>
                <div>{props.money.number}</div>
            </Banknote>
            {/*{props.money.banknotes === 'Dollars'*/}
            {/*    ? <GreenBanknotes>*/}
            {/*        <div>{props.money.banknotes}</div>*/}
            {/*        <div>{props.money.value}</div>*/}
            {/*        <div>{props.money.number}</div>*/}
            {/*    </GreenBanknotes>*/}
            {/*    : <BlueBanknotes>*/}
            {/*        <div>{props.money.banknotes}</div>*/}
            {/*        <div>{props.money.value}</div>*/}
            {/*        <div>{props.money.number}</div>*/}
            {/*    </BlueBanknotes>*/}
            {/*}*/}
        </>
    );
};

const Banknote = styled.div`
  height: 200px;
  width: 400px;
background: ${props => {
    if(props.color ==='forestgreen') {
        return 'forestgreen'
    } return 'dodgerblue'
}};`


const GreenBanknotes = styled.div`
  height: 200px;
  width: 400px;
background: forestgreen`


const BlueBanknotes = styled.div`
  width: 400px;
  height: 200px;
  background: dodgerblue`