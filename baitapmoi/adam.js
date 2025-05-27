class Human {
    constructor(name, gender, weight) {
        this._name = name;
        this._gender = gender;
        this._weight = weight;
    }

    say(words) {
        console.log(`${this._name} says: "${words}"`);
    }

    eat(apple) {
        if (!apple.isempty()) {
            apple.decrease();
            this._weight++;
            console.log(`${this._name} ăn một miếng táo. Cân nặng: ${this._weight}, Táo còn: ${apple.getweight()}`);
        } else {
            console.log(`${this._name} không thể ăn nữa, quả táo đã hết.`);
        }
    }

    checkApple(apple) {
        console.log(`Táo còn lại: ${apple.getweight()} đơn vị.`);
    }

    getInfo() {
        return {
            name: this._name,
            gender: this._gender,
            weight: this._weight
        };
    }
}
