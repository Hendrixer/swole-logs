import constants from './constants';
class Users {
  private path: string;
  private headers;
  constructor() {
    this.path = `${constants.api}/users`;
    this.headers = {
      'X-Parse-Application-Id': constants.keys.parseId,
      'X-Parse-REST-API-Key': constants.keys.parseRest,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
  }
  register(username: string, password: string) {
    return fetch(this.path, {
      method: 'post',
      body: JSON.stringify({
        username, password
      }),
      headers: this.headers
    })
    .then(resp => resp.json());
  }
  
};

const users = new Users();
export default users;
