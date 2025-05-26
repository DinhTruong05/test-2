class Rectangle {
    _length;
    _width;
    constructor(width, length) {
        this._width = width;
        this._length = length;
    }
    get chuvi(){
        return 2 * (this._width + this._length);
    }
    get area(){
        return this._length*this._length;
    }
    showinfo() {
        return "Chu vi: " + this.chuvi + "; Dien tich: " + this.area;
    }

    draw(ctx, x, y, color = "blue") {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, this._width, this._length);
    }
}