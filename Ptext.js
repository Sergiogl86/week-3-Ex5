import Contenedor from "./Contenedor.js";
class Ptext extends Contenedor {
  constructor(parentElement, tag, text) {
    debugger;
    super(parentElement, tag);
    this.element.innerHTML = text;
  }
}

export default Ptext;
