class Cricle {
    _radius;
    _color;
    _area;
    constructor(radius, color) {
        this._radius = radius;
        this._color = color;
        this._area =  Math.PI * radius * radius;
    }
    showinfo() {
        return "Radius " + this._radius + " Color " + this._color + " Area " + this._area;
    }
}