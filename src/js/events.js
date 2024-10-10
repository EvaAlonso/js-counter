import {add, reset, decrease} from './counter.js';


const decreaseBtn = document.querySelector("#decrease");
const resetBtn = document.querySelector("#reset");
const addBtn = document.querySelector("#add");

//Aquí estarán los eventos que ejecutarán cada una de las funciones realizadas

addBtn.addEventListener("click", add);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);