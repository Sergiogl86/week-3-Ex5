import Contenedor from "./Contenedor.js";
import Image from "./Image.js";
import Boton from "./Boton.js";

const botonImg = document.querySelector(".botonImg");
debugger;
botonImg.addEventListener("click", textImgFunction);

debugger;
const botonButton = document.querySelector(".botonButton");
debugger;
botonButton.addEventListener("click", ButtonCrear);

/*
const boton = document.querySelector(".boton");
debugger;
boton.addEventListener("click", funcionCrear);

const boton = document.querySelector(".boton");
debugger;
boton.addEventListener("click", funcionCrear);*/

function textImgFunction() {
  debugger;
  const url = document.querySelector(".textImg").value;
  const newElemnt = new Image(".contenedor", "img", url);
}

function ButtonCrear() {
  debugger;
  const textButton = document.querySelector(".textButton").value;
  const newElemnt = new Boton(".contenedor", "button", textButton);
}

/*

function funcionCrear() {
  debugger;
  const newTag = document.querySelector(".textbox").value;
  const newElemnt = new Contenedor(".contenedor", newTag);
}

function funcionCrear() {
  debugger;
  const newTag = document.querySelector(".textbox").value;
  const newElemnt = new Contenedor(".contenedor", newTag);
}*/
