const initialState = {
    id: "",
    joke: "",
    status: 200, 
    isFetching: false,
    error: ""
}

export const quotesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
        case 'FETCH_JOKE_START':
            return {
                ...state,
                isFetching: true
            };
        case 'FETCH_JOKE_SUCCESS':
            return {
                ...state,
                isFetching: false,
                joke: action.payload,
                error: ''
            };
        case 'FETCH_JOKE_FAIL':
            return{
                ...state,
                isFetching: false,
                error: action.payload
            };
        
            return state;
    }
}