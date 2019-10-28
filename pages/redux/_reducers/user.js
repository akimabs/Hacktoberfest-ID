dconst initialState = {
    isLoading: true,
    contributor: [
        {
            name: 'Daffa Abdul Farras',
            name: 'Daffa Gans'
        },
        {
            name: 'Dina Maretta',
            name: 'LovelyBabe'
        },
    ],
    error: null
}

const user = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_USER':
            return {
                ...state,
                contributor: state.contributor
            }

        default:
            return state
    }
}

export default user
