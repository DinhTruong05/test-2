class TV {
    constructor() {
        this.state = false;
        this.channel = 1;
        this.volume = 10;
    }

    turnOn() {
        this.state = true;
        updateUI(this);
    }

    turnOff() {
        this.state = false;
        updateUI(this);
    }

    setChannel(newChannel) {
        if (this.state && newChannel > 0) {
            this.channel = newChannel;
            updateUI(this);
        }
    }

    setVolume(newVolume) {
        if (this.state && newVolume >= 0) {
            this.volume = newVolume;
            updateUI(this);
        }
    }
}
