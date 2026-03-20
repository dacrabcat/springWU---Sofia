document.querySelector(".fade-layer").addEventListener("click",showMenu)

document.querySelector("#button").addEventListener("click",showMenu)

function showMenu(){
    let menu = document.querySelector(".mobilenav");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}


document.querySelector(".fade-layer").addEventListener("click",showPhoto)

document.querySelector("#menubutton").addEventListener("click",showPhoto)

function showPhoto(){
    let photo = document.querySelector(".userphoto");
    menu.classList.toggle("show2");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}