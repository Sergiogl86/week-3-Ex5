import Contenedor from "./Contenedor.js";

class Image extends Contenedor {
  constructor(parentElement, tag, url) {
    debugger;
    super(parentElement, tag);
    this.element.src = url;
  }
}

export default Image;
