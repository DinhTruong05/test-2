let rec = new Rectangle(30, 15);
let rec2 = new Rectangle(50, 15);

let arr = [rec, rec2];
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let xOffset = 10;

let output = "";
for (let i = 0; i < arr.length; i++) {
    arr[i].draw(ctx, xOffset, 20, i === 0 ? "blue" : "green");
    output += arr[i].showinfo() + "<br>";
    xOffset += arr[i]._width + 10;
}

document.getElementById("output").innerHTML = output;