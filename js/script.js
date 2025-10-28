document.addEventListener('DOMContentLoaded', function() {
    
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navList = document.getElementById('nav-list');

    // Função para alternar a visibilidade do menu móvel
    mobileMenuButton.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Opcional: Fechar o menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

});