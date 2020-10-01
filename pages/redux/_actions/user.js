export const createUser = (item) => ({
    type: 'CREATE_USER',
    payload: item
})

export const getUser = () => ({
    type: 'GET_USER'
})

export const addMemo = (memo) => ({
    type: 'ADD_MEMO',
    payload: memo
})
const initialState = {
    isLoading: true,
    contributor: [
        {
            name: 'Wisnu'
        },
        {
            name: 'Bambang'
        },
    ],
    error: null
}
