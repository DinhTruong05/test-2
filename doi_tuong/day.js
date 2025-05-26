let day1 = new Date("05","10","1995");
let day2 = new Date("15","04","1995");
let day3 = new Date("22","10","1995");
let day4 = new Date("29","10","1995");

let arrday = [day1,day2,day3,day4];
for(let i=0;i<arrday.length;i++){
document.write(arrday[i].showdate()+"<br>");
}