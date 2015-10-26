var constants_1 = require('./constants');
var Users = (function () {
    function Users() {
        this.path = constants_1.default.api + "/users";
        this.headers = {
            'X-Parse-Application-Id': constants_1.default.keys.parseId,
            'X-Parse-REST-API-Key': constants_1.default.keys.parseRest,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        };
    }
    Users.prototype.register = function (username, password) {
        return fetch(this.path, {
            method: 'post',
            body: JSON.stringify({
                username: username, password: password
            }),
            headers: this.headers
        })
            .then(function (resp) { return resp.json(); });
    };
    return Users;
})();
;
var users = new Users();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = users;
