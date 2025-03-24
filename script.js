// Seleciona o botão e o corpo da página
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

// Verifica se o modo escuro já está ativado
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Muda o texto do botão dependendo do modo
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Escuro';
    }
});