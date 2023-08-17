function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

  /* if(html.classList.contains('light')) {
        html.classList.remove('light')
    } else {
        html.classList.add('light')
    }*/


    const img = document.querySelector("#profile img")
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/assets/avatar-light (2).png")
    } else {
        img.setAttribute("src", "./assets/assets/avatar (2).png")

    }
}

