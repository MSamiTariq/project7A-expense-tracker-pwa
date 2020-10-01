import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';
import {transType} from '../context/AppReducer';

export const TransactionHistory = () => {
    const {transactions }= useContext(GlobalContext);
    
    return (
        <div>
            <h5 className="trhistory">Transaction History</h5>
            <ul className="unlist">
            {transactions.map((transact: transType) => 
                    (
                    <Transaction transaction= {transact}/>
                    )
                )}
            </ul>
        </div>
    )
}

export default TransactionHistory;