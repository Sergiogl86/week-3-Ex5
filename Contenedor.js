class Contenedor {
  element;
  constructor(parentElement, tag) {
    this.element = document.createElement(tag);
    const position = document.querySelector(parentElement);
    this.element.className = "box";
    position.append(this.element);
  }
}

export default Contenedor;
