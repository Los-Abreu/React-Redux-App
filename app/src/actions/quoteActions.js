import axios from 'axios';
import React, {useState} from "react"


export const fetchQuote = () => {
  return dispatch => {
    dispatch({ type: 'FETCH_QUOTE_START' });
    axios
      .get(`https://programming-quotes-api.herokuapp.com/quotes/lang/en`)
      .then(res => {
        dispatch({ type: 'FETCH_QUOTE_SUCCESS', payload: res});
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_QUOTE_FAILURE',
          payload: `Error ${err.response}: ${err.response}`
        });
      });
  };
};

export const updateTitle = newTitle => {
  return {};
};