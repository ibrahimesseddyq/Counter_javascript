const btns = document.querySelectorAll('.btn')
const nbr = document.querySelector('.number')
let nb = 0

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("increase")) {
            nb++
        } else if (styles.contains('decrease')) {
            nb--
        } else if (styles.contains('reset')) {
            nb = 0
        }
        if (nb > 0) {
            nbr.style.color = "green"
        } else if (nb < 0) {
            nbr.style.color = "red"
        } else {
            nbr.style.color = "black"
        }
        nbr.textContent = nb
        console.log(nb)
    })
})