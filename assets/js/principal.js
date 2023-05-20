var cine = {
    nombre : "Cine JS"
}

var ponertitulopagina = () => {
    var tituloPagina = document.querySelector('#titulo pagina');
    tituloPagina.textContent = cine.nombre;
}

ponertitulopagina();

