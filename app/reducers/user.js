import { handleActions } from 'redux-actions';


export default handleActions({
  SEARCH_USER: (state, action) => action.payload.user
}, null);

// Same as:
// import { SEARCH_USER } from '../constants/ActionTypes';
//
// export default function user(state = null, action) {
//   const { payload } = action;
//   switch (action.type) {
//   case SEARCH_USER:
//     return payload.user;
//   default:
//     return state;
//   }
// }
