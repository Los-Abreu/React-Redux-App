import axios from 'axios';

export const fetchJoke = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_JOKE_START' });
        axios
            .get('https://icanhazdadjoke.com/')
            .then(res => {
                console.log(res);
                //dispatch({ type: 'FETCH_JOKE_SUCCESS', payload: res.data.quotes })
            })
            .catch(err => {
                console.log(err.response)
                //dispatch({ type: 'FETCH_JOKE_FAIL', payload: `Error ${err.response.status}: ${err.response.data}`})
            })
    }
}

export const updateTitle = newTitle => {
    return {};
}