import Contenedor from "./Contenedor.js";

class Boton extends Contenedor {
  debugger;
  constructor(parentElement, tag, textButon) {
    debugger;
    super(parentElement, tag);
    this.element.innerHTML = textButon;
  }
}

export default Boton;
