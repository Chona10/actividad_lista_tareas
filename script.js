// Esta funcion es para agregar una tarea
function agregarTarea() {
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const listaTareas = document.getElementById("listaTareas");
    const nuevaTareaTexto = nuevaTareaInput.value.trim();
    if (nuevaTareaTexto !== "") {
      const nuevaTarea = document.createElement("li");
      nuevaTarea.textContent = nuevaTareaTexto;
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";
      botonEliminar.className = "delete";
      botonEliminar.onclick = function() {
         listaTareas.removeChild(nuevaTarea);
    };
    nuevaTarea.appendChild(botonEliminar);
    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
    }
    }


//funcion para marcar una tarea como completada
function marcarCompletada(tarea){
    tarea.classList.toggle("completed");
}



// agrega un evento de clic a las tareas como completadas
document.getElementById("listaTareas").addEventListener("click",
function(event) {
if (event.target.tagName === "LI") {
marcarCompletada(event.target);
}
});


//agrega un evento de clic al boton de agregar
document.getElementById("agregar").addEventListener("click", agregarTarea);

//funcion para mostrar como completadas las tareas
function mostrarCompletadas() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
    if (tarea.classList.contains("completed")) {
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "none";
    }
    });
    }
    // muestra tareas pendientes
    function mostrarPendientes() {
    const tareas = document.querySelectorAll("li");
    tareas.forEach(tarea => {
    if (!tarea.classList.contains("completed")) {
    tarea.style.display = "flex";
    } else {
    tarea.style.display = "none";
    }
    });
    }
    // agrega evento al clic de las tareas completadas
    document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);
    // agrega evento al clic de las tareas pendientes
    document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);