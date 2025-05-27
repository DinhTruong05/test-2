class swichbutton {
    _state;
    _lamp;
    constructor() {
        this._state = false;
    }
    connecttolamp(lamp) {
        this._lamp= lamp
    }
    switchoff() {
        this._lamp.turnoff();
    }
    switchon() {
        this._lamp.turnon();
    }
}