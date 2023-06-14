import { reducerCases } from './Constants.js';

export const initialState = {
  token:null,
};

const reducer = (state, action) => {
  switch(action.type) {default: 
    case reducerCases.SET_TOKEN : {
      return {
        ...state, 
        token: action.token,
      }
    }
    return state
  }
};

export default reducer;