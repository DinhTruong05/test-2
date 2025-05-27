class Tom {
    _name;
    _weight;
    _maxspeed;
    constructor(name, weight, maxspeed) {
        this._name = name;
        this._weight = weight;
        this._maxspeed = maxspeed;
    }
    say(){
        console.log("tom says: meo meo");
    }
    catchJerry(jerry){
        if(!jerry.alive){
            console.log(this._name + " can't eat jerry because jerry is dead");
            return false;
        }
        if(this._maxspeed>jerry.speed){
            console.log(this._name + " catch jerry because jerry is too slow");
            return true;
        }else{
            console.log(this._name + " can't catch jerry because jerry is too fast");
            return false;
        }
    }

    eatJerry(jerry){
        if(jerry.alive){
            console.log("jerry is dead. " +this._name + " start eating")
            this._weight += jerry.weight;
            console.log("jerry is dead. " +this._name + " eat jerry. " + this._weight + "kg");
        }else {
            console.log("jerry is alive. " +this._name + " can't eat jerry");
        }
    }


}