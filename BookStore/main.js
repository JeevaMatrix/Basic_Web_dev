//selecting + button
var addicon = document.getElementById("Add-icon")
var overlay = document.querySelector(".overlay")
var popup = document.querySelector(".popup")
addicon.addEventListener("click",function(){
    overlay.style.display = "block"
    popup.style.display = "block"
})

var addpopup = document.getElementById("add-button")
var cancelpopup = document.getElementById("cancel-button")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display = "none"
    popup.style.display = "none"
})

var bookname = document.getElementById("bookname")
var author = document.getElementById("authorname")
var des = document.getElementById("description")
var bookcontainer = document.querySelector(".books-container")

addpopup.addEventListener("click",function(event){
    event.preventDefault()
    var newbook = document.createElement("div")
    newbook.setAttribute("class","book")
    newbook.innerHTML = `<h2>${bookname.value}</h2>
            <h5>${author.value}</h5>
            <p>${des.value}</p>
            <button onclick="del(event)">Delete</button>`
    bookcontainer.appendChild(newbook)
    overlay.style.display = "none"
    popup.style.display = "none"
})
function del(event){
    event.target.parentElement.remove()
 }