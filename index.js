class Contenedor {
  element;
  constructor(parentElement, tag) {
    this.element = document.createElement(tag);
    const position = document.querySelector(parentElement);
    this.element.className = "box";
    position.append(this.element);
  }
}

const boton = document.querySelector(".boton");
debugger;
boton.addEventListener("click", funcionCrear);

function funcionCrear() {
  debugger;
  const newTag = document.querySelector(".textbox").value;
  const newElemnt = new Contenedor(".contenedor", newTag);
}
