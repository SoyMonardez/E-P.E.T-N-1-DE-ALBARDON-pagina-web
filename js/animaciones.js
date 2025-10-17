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
// Detecta animaciones al hacer scroll
const elementosAnimar = document.querySelectorAll('.animar');

function mostrarElementosVisibles() {
  const alturaPantalla = window.innerHeight;
  elementosAnimar.forEach(el => {
    const posicion = el.getBoundingClientRect().top;
    if (posicion < alturaPantalla - 100) {
      el.classList.add('visible');
    }
  });
}

// Ejecuta al cargar y al hacer scroll
window.addEventListener('scroll', mostrarElementosVisibles);
window.addEventListener('load', mostrarElementosVisibles);
