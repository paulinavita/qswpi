import React, { useReducer, createContext } from "react";

export const SwapiContext = createContext();

const initState = {
  isLoading: true,
  page: 1,
  data: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {...state, ...action.payload};
    case "FETCH_API":
      return action.payload;
    case "INC_PAGE":
    console.log(action,state, 'state on inc ');
        
      return {...state, ...action.payload};
    case "DEC_PAGE":
    return {...state, ...action.payload};
    default:
      return state;
  }
};

export const SwapiProvider = props => {
  const [state, dispatch] = useReducer(reducer, initState);
  //   console.log(dispatch, 'disini dispatch');

  const val = { state, dispatch };
  return (
    <SwapiContext.Provider value={val}>{props.children}</SwapiContext.Provider>
  );
};
