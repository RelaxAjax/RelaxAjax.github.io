const navSlide = ()=>{
    const nav = document.querySelector("nav");
    const links = document.querySelector(".links");
    const body = document.querySelector("body");
    const menuBtn = document.querySelector(".burger");

    menuBtn.addEventListener("click", ()=>{
        nav.classList.toggle("active");
        links.classList.toggle("active");
        body.classList.toggle("no-scroll");
        menuBtn.classList.toggle("toggle");
    });
}

navSlide();