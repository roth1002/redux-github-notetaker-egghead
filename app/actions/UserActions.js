import { SEARCH_USER } from '../constants/ActionTypes';
import { getGithubInfo } from '../api/UserAPI';


export function user(data) {
  return {
    type: SEARCH_USER,
    user: data
  }
}


export function search(username) {
  return dispatch => {
    getGithubInfo(username)
      .then((data) => {
        dispatch(user(data));
      })
  };
}
