const tv = new TV();
const remote = new Remote();

function updateUI(tv) {
    document.getElementById("status").innerText = tv.state ? "Bật" : "Tắt";
    document.getElementById("kenh").innerText = tv.state ? tv.channel : "--";
    document.getElementById("amluong").innerText = tv.state ? tv.volume : "--";
}
