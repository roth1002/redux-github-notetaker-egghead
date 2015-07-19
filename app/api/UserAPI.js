import Promise from 'bluebird';
import fetch from 'isomorphic-fetch';


function parseJSON(response) {
  return response.json();
}

function getRepos(username) {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(parseJSON);
}

function getUserInfo(username) {
  return fetch(`https://api.github.com/users/${username}`)
    .then(parseJSON);
}


const apis = {
  getGithubInfo(username) {
    return Promise.all([ getRepos(username), getUserInfo(username) ])
      .spread((repos, bio) => {
        return {
          repos,
          bio
        };
      });
  }
};


export default apis;
