var cursos = [];

var curso1 = {
    id: 1,
    nombre: "Desarrollo Web Frontend",
    descripcion: "Aprende HTML, CSS y JavaScript para crear interfaces de usuario modernas y responsivas.",
    categoria: "Desarrollo Web",
    duracion: "10 semanas",
    precio: "₡185 000",
    imagen: "imagenes/frontend.jpg"
};
cursos.push(curso1);

var curso2 = {
    id: 2,
    nombre: "Backend con Node.js",
    descripcion: "Crea APIs y bases de datos utilizando Node.js y Express.",
    categoria: "Desarrollo Web",
    duracion: "12 semanas",
    precio: "₡210 000",
    imagen: "imagenes/node.jpg"
};
cursos.push(curso2);

var curso3 = {
    id: 3,
    nombre: "Bases de Datos y SQL",
    descripcion: "Modela y consulta datos con MySQL.",
    categoria: "Desarrollo Web",
    duracion: "8 semanas",
    precio: "₡160 000",
    imagen: "imagenes/sql.jpg"
};
cursos.push(curso3);

var curso4 = {
    id: 4,
    nombre: "Diseño UI/UX",
    descripcion: "Wireframes y prototipos en Figma.",
    categoria: "Diseño",
    duracion: "9 semanas",
    precio: "₡175 000",
    imagen: "imagenes/uxui.jpg"
};
cursos.push(curso4);

var curso5 = {
    id: 5,
    nombre: "Diseño Gráfico Digital",
    descripcion: "Color y tipografía para redes.",
    categoria: "Diseño",
    duracion: "7 semanas",
    precio: "₡150 000",
    imagen: "imagenes/diseno-grafico.jpg"
};
cursos.push(curso5);

var curso6 = {
    id: 6,
    nombre: "Ciencia de Datos",
    descripcion: "Análisis y visualización con Python.",
    categoria: "Datos",
    duracion: "11 semanas",
    precio: "₡225 000",
    imagen: "imagenes/datos.jpg"
};
cursos.push(curso6);

function crearTarjeta(curso) {
    var columna = document.createElement("div");
    columna.className = "col-md-4 mb-4";

    var tarjeta = document.createElement("div");
    tarjeta.className = "card h-100";

    var imagen = document.createElement("img");
    imagen.className = "card-img-top";
    imagen.src = curso.imagen;
    imagen.alt = curso.nombre;

    var cuerpo = document.createElement("div");
    cuerpo.className = "card-body d-flex flex-column";

    var titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.innerText = curso.nombre;

    var categoria = document.createElement("p");
    categoria.className = "card-text";
    categoria.innerHTML = "<strong>Categoría:</strong> " + curso.categoria;

    var descripcion = document.createElement("p");
    descripcion.className = "card-text";
    descripcion.innerText = curso.descripcion;

    var duracion = document.createElement("p");
    duracion.className = "card-text";
    duracion.innerHTML = "<strong>Duración:</strong> " + curso.duracion;

    var precio = document.createElement("p");
    precio.className = "card-text";
    precio.innerHTML = "<strong>Precio:</strong> " + curso.precio;

    cuerpo.appendChild(titulo);
    cuerpo.appendChild(categoria);
    cuerpo.appendChild(descripcion);
    cuerpo.appendChild(duracion);
    cuerpo.appendChild(precio);

    tarjeta.appendChild(imagen);
    tarjeta.appendChild(cuerpo);
    columna.appendChild(tarjeta);

    return columna;
}

function mostrarCursos(listaCursos) {
    var contenedor = document.querySelector("main .row");
    contenedor.innerHTML = "";

    for (var i = 0; i < listaCursos.length; i++) {
        var cursoActual = listaCursos[i];
        var tarjeta = crearTarjeta(cursoActual);
        contenedor.appendChild(tarjeta);
    }
}

function limpiarTarjetasEstaticas() {
    var filas = document.querySelectorAll("main .row");
    
    for (var i = 0; i < filas.length; i++) {
        var fila = filas[i];
        var tarjetas = fila.querySelectorAll(".col-md-4");
        if (tarjetas.length > 0) {
            fila.innerHTML = "";
        }
    }
}

function buscarCursos(texto) {
    var resultados = [];
    var textoBusqueda = texto.toLowerCase();
    
    for (var i = 0; i < cursos.length; i++) {
        var curso = cursos[i];
        var nombreCurso = curso.nombre.toLowerCase();
        var descripcionCurso = curso.descripcion.toLowerCase();
        
        if (nombreCurso.indexOf(textoBusqueda) !== -1 || descripcionCurso.indexOf(textoBusqueda) !== -1) {
            resultados.push(curso);
        }
    }
    
    return resultados;
}

function filtrarPorCategoria(categoria) {
    var filtrados = [];
    
    for (var i = 0; i < cursos.length; i++) {
        var curso = cursos[i];
        if (curso.categoria === categoria) {
            filtrados.push(curso);
        }
    }
    
    return filtrados;
}

function filtrarPorBusqueda() {
    var inputBusqueda = document.querySelector("input[type='search']");
    var texto = inputBusqueda.value;
    var cursosEncontrados = buscarCursos(texto);
    mostrarCursos(cursosEncontrados);
}

function mostrarTodosLosCursos() {
    mostrarCursos(cursos);
}

function crearBotonesFiltro() {
    var contenedorBotones = document.createElement("div");
    contenedorBotones.className = "mb-4";
    contenedorBotones.id = "filtros-categorias";
    
    var etiqueta = document.createElement("p");
    etiqueta.innerHTML = "<strong>Filtrar por categoría:</strong>";
    contenedorBotones.appendChild(etiqueta);
    
    var grupoBotones = document.createElement("div");
    grupoBotones.className = "btn-group";
    grupoBotones.setAttribute("role", "group");
    
    var btnTodos = document.createElement("button");
    btnTodos.className = "btn btn-outline-primary active";
    btnTodos.innerText = "Todos";
    btnTodos.id = "btnTodos";
    
    var btnDesarrollo = document.createElement("button");
    btnDesarrollo.className = "btn btn-outline-primary";
    btnDesarrollo.innerText = "Desarrollo Web";
    btnDesarrollo.id = "btnDesarrolloWeb";
    
    var btnDiseno = document.createElement("button");
    btnDiseno.className = "btn btn-outline-primary";
    btnDiseno.innerText = "Diseño";
    btnDiseno.id = "btnDiseño";
    
    var btnDatos = document.createElement("button");
    btnDatos.className = "btn btn-outline-primary";
    btnDatos.innerText = "Datos";
    btnDatos.id = "btnDatos";
    
    grupoBotones.appendChild(btnTodos);
    grupoBotones.appendChild(btnDesarrollo);
    grupoBotones.appendChild(btnDiseno);
    grupoBotones.appendChild(btnDatos);
    
    contenedorBotones.appendChild(grupoBotones);
    
    var h2Desarrollo = document.querySelector("main h2");
    var hr = h2Desarrollo.nextElementSibling;
    h2Desarrollo.parentNode.insertBefore(contenedorBotones, hr);
    
    btnTodos.addEventListener("click", function() {
        mostrarTodosLosCursos();
        var botones = document.querySelectorAll(".btn-group .btn");
        for (var i = 0; i < botones.length; i++) {
            botones[i].classList.remove("active");
        }
        this.classList.add("active");
    });
    
    btnDesarrollo.addEventListener("click", function() {
        var cursosFiltrados = filtrarPorCategoria("Desarrollo Web");
        mostrarCursos(cursosFiltrados);
        var botones = document.querySelectorAll(".btn-group .btn");
        for (var i = 0; i < botones.length; i++) {
            botones[i].classList.remove("active");
        }
        this.classList.add("active");
    });
    
    btnDiseno.addEventListener("click", function() {
        var cursosFiltrados = filtrarPorCategoria("Diseño");
        mostrarCursos(cursosFiltrados);
        var botones = document.querySelectorAll(".btn-group .btn");
        for (var i = 0; i < botones.length; i++) {
            botones[i].classList.remove("active");
        }
        this.classList.add("active");
    });
    
    btnDatos.addEventListener("click", function() {
        var cursosFiltrados = filtrarPorCategoria("Datos");
        mostrarCursos(cursosFiltrados);
        var botones = document.querySelectorAll(".btn-group .btn");
        for (var i = 0; i < botones.length; i++) {
            botones[i].classList.remove("active");
        }
        this.classList.add("active");
    });
}

function iniciarPagina() {
    limpiarTarjetasEstaticas();
    mostrarTodosLosCursos();
    
    var inputBusqueda = document.querySelector("input[type='search']");
    inputBusqueda.addEventListener("input", filtrarPorBusqueda);
    
    crearBotonesFiltro();
    
    console.log("Cursos cargados. Total: " + cursos.length);
}

document.addEventListener("DOMContentLoaded", iniciarPagina);