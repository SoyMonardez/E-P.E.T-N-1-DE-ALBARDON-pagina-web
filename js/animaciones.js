// =====================
// ANIMACIONES AL HACER SCROLL
// =====================

// Espera a que cargue el contenido
document.addEventListener("DOMContentLoaded", () => {
    const elementosAnimados = document.querySelectorAll(".animar");

    const observador = new IntersectionObserver((entradas, observer) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observer.unobserve(entrada.target); // Deja de observar una vez animado
            }
        });
    }, {
        threshold: 0.2 // porcentaje visible del elemento (20%)
    });

    elementosAnimados.forEach(el => observador.observe(el));
});
