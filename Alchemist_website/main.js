
window.addEventListener("load",function(){
    const nav = document.querySelector("nav")
    setTimeout(function(){
        nav.style.top = '0';
    },400)
})
window.addEventListener("load",function(){
    const cover = this.document.querySelector(".cover")
    this.setTimeout(function(){
        cover.style.opacity = "100"
    },400)
})
window.addEventListener("scroll",function(){
    const authimg = this.document.getElementById("author-image")
    const authcont = this.document.getElementById("author-content")
    this.setTimeout(function(){
        authimg.style.left = "0"
        authcont.style.left = "0"
    },400)
})
window.addEventListener("load",function(){
    window.scrollTo(0,0);
})