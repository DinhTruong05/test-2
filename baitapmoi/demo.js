function birthdayCakeCandles(candles) {
    let max = candles[0];
    let count = 1;
    for ( let i = 1;i<candles.length;i++){
        if(candles[i]>max){
            max = candles[i];
            count = 1;
        }else if (candles[i]===max){
            count ++
        }
    }
    console.log(count)

}
