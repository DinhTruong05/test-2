let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let grd = ctx.createLinearGradient(0, 0, 0, 400);
grd.addColorStop(0.0, "red");
grd.addColorStop(0.25, "yellow");
grd.addColorStop(0.5, "orange");
grd.addColorStop(0.75, "green");
grd.addColorStop(1.0, "blue");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 400, 400);