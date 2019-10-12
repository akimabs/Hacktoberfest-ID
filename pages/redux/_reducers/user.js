const initialState = {
    isLoading: true,
    contributor: [
        {
            name: 'Abdul Hakim',
            name: 'Abdel Ganteng'
        },
        {
            name: 'Edytk',
            name: 'et.mk'
        },
        {
            name: 'Ezra Lazuardy',
            name: 'ezralazuardy.com'
        }
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
