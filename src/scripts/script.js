// Busca o botão e o ícone no HTML
// Botão que troca o tema
const themeButton = document.getElementById('theme-button');

// Ícone que será alterado de acordo com o tema
const themeIcon = document.getElementById('theme-icon');

// Receberá a classe do tema
const body = document.body;

//------

// Persistência do tema
const savedTheme = localStorage.getItem('theme');

// Aplica o tema salvo no carregamento da página
applyTheme(savedTheme === 'light');

//------

// Função para alterar o estado visual do tema e trocar o ícone
function applyTheme(isLight) {
    // Se isLight for verdadeiro, ele adiciona a classe light ao body e se for falso, remove a classe voltando ao dark
    if (isLight) {
        body.classList.add('light');
        themeIcon.className = 'bi bi-moon';
    } else {
        body.classList.remove('light');
        themeIcon.className = 'bi bi-sun';
    }
}

// Evento de click
themeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que o link salte para o topo (comportamento padrão)

    // Altera a classe no body e armazena o resultado
    const isLight = body.classList.toggle('light');

    // Atualiza as classes e os ícones
    applyTheme(isLight);

    // Salva a preferência
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});