class Date {
    _day;
    _month;
    _year;

    constructor(day, month, year) {
        this._day = day;
        this._month = month;
        this._year = year;
    }
    showdate() {
        return "ngay "+this._day + " thang " + this._month + " nam " + this._year;
    }
}





