import React, { useContext } from 'react';
import {transType} from '../context/AppReducer'

// Import the Global State
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {

    const  {transactions}  = useContext(GlobalContext);

    const transactionAmounts = transactions.map((transaction: transType) => transaction.transactionAmount);
    const balance = transactionAmounts.reduce((acc: number, item: number) => (acc += item), 0).toFixed(2);
    

    return (
        <div>
            <h4>Current Balance</h4>
            <h1 className="bal">${balance}</h1>
        </div>
    )
}