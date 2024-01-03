const navMenu = document.getElementById('navMenu')

const bar = document.querySelector('.bar')
const open = document.querySelector('.open')
const close = document.querySelector('.close')

console.log(open);

bar.addEventListener("click", ()=> {
    navMenu.classList.toggle('active')
    if(navMenu.classList.contains('active')) {
        open.style.display= "none"
        close.style.display= "block"
    } else {
        open.style.display = "block"
        close.style.display = "none"
    }
})
