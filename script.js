
const diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const mesesDelAño = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
// // getFullYear() retorna el año 2023
// console.log(fechaActual.getFullYear());

// // getDate() retorna el dia en numero| (1-31)
// console.log(fechaActual.getDate());

// // getMonth() retorna el mes | (0-11)
// console.log(fechaActual.getMonth());

// // getDaye() retorna en numero el dia de la semana
// // 0 = Domingo 1 = Lunes 2 = Martes
// console.log(fechaActual.getDay());

// /* getHours() hora actual de 0 a 23*/
// console.log(fechaActual.getHours() + 1);

// /* */
// console.log(fechaActual.getMinutes() + 1);

// /* Obteniendo el dia de la semana actual (0-6)*/
// const diaSemanaActual = fechaActual.getDay();

// /* Obteniendo el dia del mes actual (1-31)*/
// const diaMesActual = fechaActual.getDate();

// /* Obteniendo el año actual */
// const añoActual = fechaActual.getFullYear();


setInterval(()=>{

    const fechaActual = new Date();
    /* Obteniendo la hora actual */
    const horaActual = fechaActual.getHours().toString().padStart(2,"0");
    
    /* Obteniendo minutos */
    const minutosActuales = fechaActual.getMinutes().toString().padStart(2,"0");
    
    /* Obteniendo segundos */
    const segundosActuales = fechaActual.getSeconds().toString().padStart(2,"0");

    /* Obteniendo numero del dia actual 1-31 */
    const numeroDiaActual = fechaActual.getDate();   
    const diaActualSemana = diasDeLaSemana[fechaActual.getDay()]; // 0-6
    const nombreMesActual = mesesDelAño[fechaActual.getMonth()];
    const añoActual = fechaActual.getFullYear();
    // obteniendo el parrafo fecha y año
    let parrafoFechaAño = document.querySelector("#fecha_año");
    parrafoFechaAño.innerHTML = `${diaActualSemana} ${numeroDiaActual} de ${nombreMesActual} del ${añoActual}`;
    // obteniendo parrafo de hora
    let parrafoHora = document.querySelector("#hora");
    if(horaActual >= 12 || horaActual == 23){
        hora.innerHTML = `${horaActual}:${minutosActuales}:${segundosActuales} pm`;
    }else{
        hora.innerHTML = `${horaActual}:${minutosActuales}:${segundosActuales} am`;
    }
    
},1000);