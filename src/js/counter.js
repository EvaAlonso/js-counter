let counter = 0;
const initialNumber = document.querySelector("#number");
function add(){
    //Escribir tu código que aumenta
    ++counter;
    initialNumber.innerText = counter;
}

function reset(){
    //Escribir tu código que hace un reset a 0
   counter = 0;
   initialNumber.innerText = counter;
}

function decrease(){
    //Escribir tu código que resta
    if(counter >0){
        --counter;
        initialNumber.innerText = counter;
    } else {
        counter = 0;
        initialNumber.innerText = counter;
    }
    
};

export {add, reset, decrease}