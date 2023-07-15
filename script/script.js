const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >= 650) {
        header.classList.add("navbarDark");
    }
    else {
        header.classList.remove('navbarDark');
    }
}