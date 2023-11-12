window.addEventListener('scroll', () =>{
    const header = document.getElementById("header");
    header.classList.toggle("row", window.scrollY > 0)
    // header.classList.toggle("row", window.scrollY)
})

var lastScrollTop = 0
const navBar = document.getElementById("navBar");

window.addEventListener("scroll", () =>{
    var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        navBar.style.opacity = "0"
        navBar.classList.add("btnRow")
    }
    else{
        navBar.style.opacity = "1"
        navBar.classList.remove("btnRow")
    }
    lastScrollTop = scrollTop;
})