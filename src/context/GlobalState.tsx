import React, { createContext, useReducer } from 'react';
import {transType, stateType} from './AppReducer'

// Import the Reducer
import AppReducer from './AppReducer';

//Create the initial state
const initialState = {
    transactions: [],
    addTransaction: (transaction: any) => (transaction),
    delTransaction: (id: number) => (id),
}

type props = {
    transactions: any,
    delTransaction: (id: number) => void | undefined,
    addTransaction: (transaction: transType) => void,
}


// Create the Global Context
export const GlobalContext = createContext<Partial<props>>({});

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for Transactions

        // Delete Existing Transaction Action
        function delTransaction(id: number) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        // Add New Transaction Action
        function addTransaction(transaction: transType) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }
        

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );

}