// Evento para mostrar imágen al presionar un elemento del listado //
document.addEventListener('DOMContentLoaded', function() {
    const cartas = document.querySelectorAll('.cartas');
    const cartaImagen = document.querySelector('.carta-imagen');
    const cartaTexto = document.querySelector('.carta-texto');
    
    cartas.forEach(function(carta) {
        carta.addEventListener('click', function() {
            const imagen = carta.dataset.imagen;
            const texto = carta.dataset.texto;
            
            mostrarCarta(imagen, texto);
        });
    });
    
    function mostrarCarta(imagen, texto) {
        cartaImagen.innerHTML = `<img src="${imagen}" alt="">`;
        cartaTexto.textContent = texto;
    }
});
// FIN Evento para mostrar imágen al presionar un elemento del listado //

// Evento para ocultar o mostrar los elementos del listado si se ha seleccionado el Header //
function mostrarCartas(index) {
    // Ocultar todos los elementos de la sección left
    var elementosLeft = document.querySelectorAll('.item.left');
    elementosLeft.forEach(function(elemento) {
        elemento.style.display = 'none';
    });
    
    // Mostrar solo el elemento correspondiente al índice del elemento header-cartas clicado
    var elementoMostrar = document.getElementById('left-' + index);
    if (elementoMostrar) {
        elementoMostrar.style.display = 'block';
    }
}
// FIN Evento para ocultar o mostrar los elementos del listado si se ha seleccionado el Header //

