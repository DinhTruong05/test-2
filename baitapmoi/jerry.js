class Jerry {
    _name;
    _weight;
    _speed;
    constructor(name, weight, speed,) {
        this._name = name;
        this._weight = weight;
        this._speed = speed;
        this._alive = true;
    }
    say() {
        console.log("jerry says: chit chit");
    }
    get speed() {
        return this._speed;
    }
    get weight() {
        return this._weight;
    }
    get alive() {
        return this._alive ?"alive":"dead";
    }

}