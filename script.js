function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //subistituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img
    img.setAttribute("src", "./assets/avatar-light.jpeg")
    img.setAttribute("alt", "Foto de um perfil com detalhes de anjo.")
  } else {
    // se não estiver no light mode,  manter a img original
    img.setAttribute("src", "./assets/avatar.jpeg")
    img.setAttribute("alt", "foto de perfil embassada.")
  }
}
