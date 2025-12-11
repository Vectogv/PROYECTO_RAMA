// JS simple para la sección contenido

// Seleccionamos todas las tarjetas
const cards = document.querySelectorAll(".card");

// Efecto hover y clic
cards.forEach((card, index) => {
    
    // Hover suave
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.03)";
        card.style.transition = "0.2s";
        card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
    });

    // Quitar hover
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    });

    // Evento clic
    card.addEventListener("click", () => {
        alert(`Hiciste clic en la tarjeta ${index + 1}`);
    });

});

// Función para abrir el modal de registro
function abrirRegistro() {
    document.getElementById('modalRegistro').style.display = 'flex';
}

// Función para cerrar el modal de registro
function cerrarRegistro() {
    document.getElementById('modalRegistro').style.display = 'none';
}

// Función para mostrar/ocultar el menú de perfil
function togglePerfilMenu() {
    const menu = document.getElementById('menuPerfil');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}