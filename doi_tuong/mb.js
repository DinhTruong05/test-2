class mobile {
    _pin ;
    _mes;
    _inbox;
    _outbox;
    _status;
    constructor() {
        this._pin = 100;
        this._mes = "";
        this._inbox = [];
        this._outbox = [];
        this._status = false;
    }
    checkstatus(){
        if (this._status === true) {
            document.write('dien thoai dang bat')
        }else {
            document.write('dien thoai dang tat')
        }
     }
    turnonorof() {
        this._status = !this._status;
    }
    changepin() {

    }
    writemsg(text) {
        this._mes = text;
    }
    sendmsg(mobile) {
        this._outbox.push(this._mes);
        mobile._inbox.push(this._mes);
    }
    readinbox() {
        for (let i = 0; i < this._inbox.length; i++) {
            document.write("Tin nhan da nhan so " + i + " Noi dung : " + this._inbox[i] );
        }
    }
    readoutbox() {
        for (let i = 0; i < this._outbox.length; i++) {
            document.write("Tin nhan da gui so " + i + " Noi dung : " + this._outbox[i] );
        }
    }
}