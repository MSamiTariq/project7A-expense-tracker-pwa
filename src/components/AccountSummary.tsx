import React, { useContext } from 'react'
import {transType} from '../context/AppReducer'

// Import the Global State
import { GlobalContext } from '../context/GlobalState';

export const AccountSummary = () => {

    const  {transactions}  = useContext(GlobalContext);

    const transactionAmounts = transactions.map((transaction: transType) => transaction.transactionAmount);

    const income = transactionAmounts
        .filter((transaction: transType) => transaction.transactionAmount > 0)
        .reduce((acc: number, transaction: transType) => (acc += transaction.transactionAmount), 0)
        .toFixed(2);

    const expense = Math.abs(transactionAmounts
        .filter((transaction: transType) => transaction.transactionAmount < 0)
        .reduce((acc: number, transaction: transType) => (acc += transaction.transactionAmount), 0)
        ).toFixed(2);

    return (
        <div id="box">
            <div>
                <h4>Income</h4>
                <p className="para plus">
                    {income}
                </p>
            </div>
            <div>
                <h4>Expense</h4> 
                <p className="para minus">
                    {expense}
                </p>
            </div>
            
        </div>
    )
}