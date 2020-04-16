import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner';
import { fetchJoke } from '../actions/jokeActions';

const DadJokes = props => {
    useEffect(() => {
        props.fetchJoke();
    }, []);

    return (
        <div>
            <h1>Dad Jokes 😂😂</h1>
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100}/>
            )}
            {props.joke && <h3>"{props.joke}"</h3>}
            {props.error && <p className='error'>{props.error}</p>}
            <button onClick={props.fetchJoke}>Fetch a new joke</button>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        id: state.quotes.id,
        joke: state.quotes.joke,
        status: state.quotes.status, 
        isFetching: state.quotes.isFetching,
        error: state.quotes.error
    }
}

export default connect(mapStateToProps, {fetchJoke})(DadJokes);
