function change() {
    bd.classList.toggle("nav-open")
}
let bd = document.querySelector("body");
let tog = document.querySelector("button");
tog.addEventListener("click", change);