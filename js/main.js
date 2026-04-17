document.querySelector(".fade-layer").addEventListener("click",showMenu)

document.querySelector("#button").addEventListener("click",showMenu)

function showMenu(){
    let menu = document.querySelector(".mobilenav");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible")
}


document.querySelector(".fade-layer2").addEventListener("click",showPhoto)

document.querySelector("#accbutton").addEventListener("click",showPhoto)

function showPhoto(){
    let photo= document.querySelector(".userphoto");
    photo.classList.toggle("show2");

    let layer = document.querySelector(".fade-layer2");
    layer.classList.toggle("visible")
}