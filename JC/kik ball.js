let img= null
img = document.getElementById("myImage")
function init() {
    img = document.getElementById("myImage")
    img.style.left = "0px";
    img.style.position = "relative";
    
}
function kick() {
    img.style.left = parseInt(img.style.left) + 100 + "px";

}
window.onload = init;