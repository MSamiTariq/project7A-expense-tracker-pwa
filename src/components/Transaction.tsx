import React, { useContext } from 'react';
import {transType} from '../context/AppReducer';

// Import the Global State
import { GlobalContext } from '../context/GlobalState';

type props = {
    transaction: transType,
}

export const Transaction = ({ transaction }: props) => {

    const { delTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? 'plus' : 'minus';

    return (
        <li className={transactionType}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button className="del-btn"
            onClick={() => delTransaction!(transaction.id)}>
                X
            </button>
        </li>
    )
}