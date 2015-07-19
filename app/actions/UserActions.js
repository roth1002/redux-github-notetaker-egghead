import { SEARCH_USER } from '../constants/ActionTypes';
import { createAction } from 'redux-actions';
import { getGithubInfo } from '../api/UserAPI';


export const user = createAction(SEARCH_USER, data => ({ user: data }));

// Same as:
// function user(data) {
//   return {
//     type: SEARCH_USER,
//     payload: {
//       user: data
//     }
//   };
// }

// With babel - optional: ["runtime"]
export const search = createAction(SEARCH_USER, async username => {
  const data = await getGithubInfo(username);
  return { user: data };
});

// Same as:
// export function search(username) {
//   return dispatch => {
//     dispatch(getGithubInfo(username)
//       .then(data => user(data)));
//   };
// }
//
// Or promise style:
// export const search = createAction(SEARCH_USER, async username => {
//   return getGithubInfo(username).then(data => ({ user: data }));
// });

