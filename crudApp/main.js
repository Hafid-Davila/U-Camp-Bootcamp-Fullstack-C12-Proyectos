window.addEventListener('load', () => {
    const form = document.querySelector("#nuevoFormularioTarea");
    const input = document.querySelector("#entradaNuevaTarea");
    const elLista = document.querySelector("#tareas");

    form.addEventListener('submit', (e) =>{
        e.preventDefault();

        const tarea = input.value;

        if(!tarea) {
            alert('Por favor agregar tarea')
            return;
        }

        const elTarea = document.createElement("div");
        elTarea.classList.add("tarea");

        const elcontenidoTarea = document.createElement("div");
        elcontenidoTarea.classList.add("contenido");

        elTarea.appendChild(elcontenidoTarea);

        const elEntradaTarea = document.createElement("input");
        elEntradaTarea.classList.add("texto");
        elEntradaTarea.type = "text";
        elEntradaTarea.value = tarea;
        elEntradaTarea.setAttribute("readonly", "readonly");

        elcontenidoTarea.appendChild(elEntradaTarea);
        
        const elAccionesTarea = document.createElement("div");
        elAccionesTarea.classList.add("acciones");
        
        const elEditarTarea = document.createElement("button");
        elEditarTarea.classList.add("editar");
        elEditarTarea.innerHTML = "Editar";

        const elBorrarTarea = document.createElement("button");
        elBorrarTarea.classList.add("borrar");
        elBorrarTarea.innerHTML = "Borrar";

        elAccionesTarea.appendChild(elEditarTarea);
        elAccionesTarea.appendChild(elBorrarTarea);

        elTarea.appendChild(elAccionesTarea);

        elLista.appendChild(elTarea);

        input.value = "";

        elEditarTarea.addEventListener('click', () => {
            if (elEditarTarea.innerText.toLowerCase() == "editar") {
                elEntradaTarea.removeAttribute("readonly");
                elEntradaTarea.focus();
                elEditarTarea.innerText = "Guardar";
            } else {
                elEntradaTarea.setAttribute("readonly", "readony");
                elEditarTarea.innerText = "Editar"
            }
        });

        elBorrarTarea.addEventListener('click', () => {
            elLista.removeChild(elTarea);
        });







        


    })

})