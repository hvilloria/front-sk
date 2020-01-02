export const setUser = ({ headers }) => headers &&
  localStorage.setItem('user', JSON.stringify({
    access_token: headers['access-token'],
    client: headers['client'],
    uid: headers['uid']
  }));
