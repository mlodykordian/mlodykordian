document.addEventListener('DOMContentLoaded', function(){
    const nav = document.querySelector('.navbar')
    function addBackground() {
        if(window.scrollY >= 1) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

window.addEventListener('scroll', addBackground)
})