const mobileMenu = document.getElementById('mobile-menu');
const nav = document.querySelector('.nav');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

const loginButton = document.querySelector('.nav-list a[href="#"]'); // Cambia el href según corresponda
const loginModal = document.getElementById('login-modal');
const closeModal = document.getElementById('close-modal');

// Mostrar modal al hacer clic en Login
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'block';
});

// Cerrar modal al hacer clic en la X
closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

// Opcional: manejar el envío del formulario
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica de autenticación
    alert('Formulario enviado'); // Para propósitos de demostración
    loginModal.style.display = 'none'; // Cierra el modal después del envío
});