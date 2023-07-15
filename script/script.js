const header = document.querySelector('.navbar');
window.onscroll = function() {
    const top = window.scrollY;
    if(top >= 650) {
        header.classList.add("navbarDark");
    }
    else {
        header.classList.remove('navbarDark');
    }
}