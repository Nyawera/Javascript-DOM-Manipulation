document.body.style.background="silver"
document.getElementById("title").style.color="green"
let title=document.querySelectorAll("h3").forEach(item=>item.innerHTML=item.textContent.toLocaleUpperCase())

const addElement = document.createElement("li")
addElement.appendChild(document.createTextNode("Grapes"))
let pears=document.getElementById("fruList").appendChild(addElement)

let shop = document.querySelector(".shop");
let image_a = document.createElement("img");
// image_a.src = "images/grapes.jpeg"
// image_a.style.backgroundColor
shop.appendChild (image_a)


let addvegetables=document.createElement("li")
addvegetables.appendChild(document.createTextNode("Spinach"))
let Spinach=document.getElementById("vegList").appendChild(addvegetables)