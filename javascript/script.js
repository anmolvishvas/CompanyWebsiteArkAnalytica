const toggleButton = document.getElementById("toggleButton");
const naviList = document.getElementById("navi-list");
const header = document.querySelector(".header");
const drop_menu = document.querySelector(".drop-menu");

toggleButton.addEventListener('click' , () => {
    naviList.classList.toggle('active');
    
})


window.onscroll = function () {
    var top = window.scrollY;
    console.log(top);
    if (top >= 200) {
        header.classList.add("active");
        drop_menu.classList.add("active");

    } else {
        header.classList.remove("active");
        drop_menu.classList.remove("active");

    }
}
