
export type transType = {
    id: number,
    description: string,
    transactionAmount: number

}

type actionType = {
    type: string,
    payload: any,
}

export type stateType = {
    transactions: object[],
}

export default (state: any, action: any) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions
                    .filter((transaction: transType) => transaction.id !== Number(action.payload))
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    };
}