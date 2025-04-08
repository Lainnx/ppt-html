
//nombre del usuario
let buttonNombre = document.querySelector("header button");  //el boton dentro del header
let pNombre = document.querySelector("header p");    //el p dentro del header
let respuesta = document.getElementById("respuesta")
let divImagen = document.getElementById("divImagen")

let victorias = 0
let empates = 0
let derrotas = 0

let iconos=["✊","🖐","✌"]

let nombreUsuario =""

buttonNombre.addEventListener("click",()=>{
    nombreUsuario = prompt("¿Cuál es tu nombre?");
    buttonNombre.style.display = "none";     //para esconder el boton una vez introduce el nombre
    pNombre.textContent = `¡Mucha suerte ${nombreUsuario}!`;
    
})
//jugada usuario
const formJuego = document.forms["formJuego"];

formJuego.addEventListener("submit",(e)=>{
    e.preventDefault();
    let jugadaHumano = formJuego["jugada"].value;

    //jugada PC
    let numMinimo = 1;
    let numMaximo = 3;
    let jugadaPC = Math.floor(Math.random()*(numMaximo - numMinimo + 1)) + numMinimo;    //+1 porque no estamos contando desde 0, el minimo es 1

    let mensaje ="";
    let audioVictoria = document.getElementById("victoria");
    let audioEmpate = document.getElementById("empate");
    let audioDerrota = document.getElementById("derrota");

    mensaje+=`<p>Tu jugada ha sido: ${iconos[jugadaHumano-1]}</p>
        <p>Mi jugada ha sido: ${iconos[jugadaPC-1]}</p>`
      

    if(jugadaHumano == jugadaPC){
        mensaje+=`<p>¡ Habéis empatado ${nombreUsuario}!</p>`;
        audioEmpate.play();
        divImagen.innerHTML="<img src='/img/empate.jpg' alt='empate'>";
        empates++
    }else if((jugadaHumano==1 && jugadaPC==3)||(jugadaHumano==2 && jugadaPC==1)||(jugadaHumano==3 && jugadaPC==2)){
        mensaje+=`<p>¡ Has ganado ${nombreUsuario}!</p>`;
        audioVictoria.play();
        divImagen.innerHTML="<img src='/img/victoria.jpg' alt='victoria'>";
        victorias++
    }else{
        mensaje+=`<p>¡ Has perdido ${nombreUsuario}!</p>`;
        audioDerrota.play();
        divImagen.innerHTML="<img src='/img/derrota.jpg' alt='derrota'>";
        derrotas++
    }
    // mensaje+=`<p>Victorias: ${victorias} | Derrotas: ${derrotas} | Empates: ${empates} | ${(victorias/(derrotas+empates)).toFixed(2)}</p>`
    let tabla = `    
    <table>
        <tr>
            <th>Victorias</th>
            <th>Empates</th>
            <th>Derrotas</th>
        </tr>
        <tr>
            <td>${victorias}</td>
            <td>${empates}</td>
            <td>${derrotas}</td>
        </tr>
    </table>`
    // mensaje += tabla
    respuesta.innerHTML = `<p>${mensaje}</p>${tabla}`

})

