const initialState = {
    isLoading: true,
    contributor: [
        {
            name: 'Abdul Hakim',
        },
        {
            name: 'et.mk'
        },
         {
            name: 'Hans euy',
            name: 'Hans gans bat'
        },
        },
         {
            name: 'Hans anjay',
            name: 'Hans pull bang'
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
