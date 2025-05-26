let x = [1,2,3,4,5,10,29,50,100,45];
let count = 0
for (let i = 0; i < x.length; i++) {
    if (x[i] >= 10) {
        count++;
    }
}document.write(count)