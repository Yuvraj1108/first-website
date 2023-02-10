const menuOpener = document.querySelector("#menu-opener")
const menuModal = document.querySelector("#menu-modal")
const menuClose = document.querySelector("#menu-close")
const header = document.querySelector("header")

const formElements = document.querySelectorAll(".form-element")


Array.from(formElements).forEach(el => {
    const inputEl = el.querySelector(".form-input");
    inputEl.addEventListener("input",
        (e) => {
            if (e.target.value != "") {
                el.classList.add("focused")
            } else {
                el.classList.remove("focused")
            }
        }
    )
})


menuOpener.addEventListener("click", () => {
    menuModal.classList.add("open");
});

menuClose.addEventListener("click", () => {
    menuModal.classList.remove("open");
})

window.addEventListener("scroll", (e) => {
    if (window.scrollY == 0) {
        header.classList.remove("header-focused");
    } else {
        header.classList.add("header-focused");
    }
})