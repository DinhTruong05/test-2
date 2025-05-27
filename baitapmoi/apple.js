class Apple {
    _weight;

    constructor() {
        this._weight = 10;
    }

    decrease() {
        if (this._weight > 0) ;
        this._weight--;

    }

    isempty() {
        return this._weight <= 0
    }

    getweight() {
        return this._weight;
    }
}
