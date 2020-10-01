import React, { useState, useContext } from 'react';
import {transType} from '../context/AppReducer'

// Import the Global State
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e: any) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction!(newTransaction);

    }
    

    return (
        <div>
            <h5 className="trhistory newtrx">Add New Transaction</h5>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="desid" className="label">
                        Description
                    </label>
                    <input  type="text" 
                            id="desid"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Detail of Transaction" 
                            required= {true}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="trid" className="label">
                        Transaction Amount
                    </label>
                    <p>positve value for income, negative for expense</p>
                    <input  type="number" 
                            id="trid"
                            value={transactionAmount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                            placeholder="Dollar Value of Transaction"
                            required= {true}
                    />
                </div>
                <button id="submit" type="submit">Add Transaction</button>
            </form>
        </div>
    )
}