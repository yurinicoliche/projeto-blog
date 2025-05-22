const body = document.querySelector("body");
const menu = [document.querySelector("#icon-menu"), document.querySelector("#close-menu")];
const darkmode_btn = document.querySelector("#darkmode-container");


function addDarkmode() {
  body.classList.toggle("dark")
}



function loadTheme() {
  const darkmode = localStorage.getItem("dark")
  if (darkmode)
    addDarkmode()
}
loadTheme()

darkmode_btn.addEventListener("click", () => {
  addDarkmode()
  // save or remove dark mode
  localStorage.removeItem("dark")
  if (body.classList.contains("dark"))
    localStorage.setItem("dark", 1)
})



menu.map(i => {
  i.addEventListener("click", () => {
    body.classList.toggle("overflow")
    document.querySelector("#navbar-inner").classList.toggle("show")

  })
})

menu.map(i => {
    i.addEventListener("click", () => {
        body.classList.toggle("overflow")
        document.querySelector("#navbar-inner").classList.toggle("show")
    })
})

