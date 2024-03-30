function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("ligtht")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //se tiver ligth mode, adicionar a imagem ligth
  if (html.classList.contains("ligtht")) {
    // substituir a imagem

    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem ligth mode, manter a imagem normal.
    img.setAttribute("src", "./assets/Avatar.png")
  }
}
