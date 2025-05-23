class User {
    _name;
    _email;
    _age;
    constructor(name, email, age) {
        this._name = name;
        this._email = email;
        this._age = age;
    }
    showinfo() {
        return "Name " + this._name + " Email " + this._email + " Age " + this._age;
    }

}