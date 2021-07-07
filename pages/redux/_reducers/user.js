const initialState = {
    isLoading: true,
    contributor: [
        {
            name: 'Abdul Hakim',
        },
        {
            name: 'et.mk'
        },
    ],
    contributor: [
        {
            name: 'Marino Imola'
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
