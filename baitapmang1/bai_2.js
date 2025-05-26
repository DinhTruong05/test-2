let a = [1,2,3,7,9,5,14,22,54];
let max = a[0];
let sum = 0;
for (let i = 1; i < a.length; i++) {
    sum += a[i];
    if (a[i] > max) {
        max = a[i];

    }
}
    let ave = sum / a.length;
alert(max + " la so lon nhat co trong mang");
document.write("Giá trị trung bình: " +ave)