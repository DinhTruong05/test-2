let jerry = new Jerry("Jerry",3,10);
jerry.say();

let tom = new Tom("Tom",10,9);
tom.say();

if(tom.catchJerry(jerry)){
    jerry.alive = false;
    tom.eatJerry(jerry);
}else {
    console.log("tom can't catch jerry and jerry run away");
}