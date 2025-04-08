
//nombre del usuario
let buttonNombre = document.querySelector("header button");  //el boton dentro del header
let pNombre = document.querySelector("header p");    //el p dentro del header

buttonNombre.addEventListener("click",()=>{
    let nombreUsuario = prompt("¿Cuál es tu nombre?");
    buttonNombre.style.display = "none";     //para esconder el boton una vez introduce el nombre
    pNombre.textContent = `¡Mucha suerte ${nombreUsuario}!`;
    
})

const formJuego = document.forms["formJuego"];

formJuego.addEventListener("submit",(e)=>{
    e.preventDefault();
    let jugada = formJuego["jugada"].value;
    
})