export default class Login{
    constructor(id, username, password){
        this.id = id;
        this.username = username;
        this.password = password;
    }

    get info() {
        return JSON.stringify(this.id + '\n' + this.username + '\n' + this.password + '\n');
      }
}