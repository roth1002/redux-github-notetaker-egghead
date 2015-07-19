import { SEARCH_USER } from '../constants/ActionTypes';


export default function user(state = null, action) {
  switch (action.type) {
  case SEARCH_USER:
    return action.user;
  default:
    return state;
  }
}
