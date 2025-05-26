class temperature {
    _celsius;
    // _mincelsius;
    constructor(celsius) {
        this._celsius = celsius;
    }
    fahrenheit() {
        return ((this._celsius * 9)/5 + 32);
    }
    kelvin() {
        return this._celsius + 273.15
    }
   showinfo(){
        return "Nhiet do Kelvin : "+ this.kelvin() + "<br/>" + "Nhiet do Fahrenheit : "+ this.fahrenheit();
   }
}