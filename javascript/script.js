function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

// Mostrar/ocultar el botón de regresar en la página de contenido
window.addEventListener('DOMContentLoaded', (event) => {
    const backBtn = document.getElementById('backBtnContainer');
    if (window.location.pathname.includes('contenido.html')) {
        backBtn.style.display = 'block';
    } else {
        backBtn.style.display = 'none';
    }
});
