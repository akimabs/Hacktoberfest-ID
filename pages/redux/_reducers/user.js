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
    ],
    error: null
}
const initialState = {
    isLoading: true,
    contributor: [
        {
            name: 'DaniVickyM'
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
