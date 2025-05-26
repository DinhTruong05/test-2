let cricle1 = new Cricle("10","red"," ");
let cricle2 = new Cricle("12","blue", " ");
let cricle3 = new Cricle("11","orange", " ");

let arr = [cricle1,cricle2,cricle3];

for(let i = 0; i < arr.length; i++){
    document.write(arr[i].showinfo()+"<br>");
}