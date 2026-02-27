document.querySelector("#fade-layer").addEventListener("click",showMenu)

document.querySelector("#button").addEventListener("click",showMenu)

function showMenu(){
    let menu = document.querySelector("#mobilenav");
    menu.classList.toggle("show");

    let layer = document.querySelector("#fade-layer");
    layer.classList.toggle("visible")
}