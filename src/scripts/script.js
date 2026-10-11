// Busca o botão e o ícone no HTML
// Botão que troca o tema
const themeButton = document.getElementById('theme-button');

// Ícone que será alterado de acordo com o tema
const themeIcon = document.getElementById('theme-icon');

// Receberá a classe do tema
const body = document.body;

//------

// Persistência do tema
/* LocalStorage 
* Quando uma página atualiza, as variáveis voltam ao estado inicial

* Ele é como um pequeno banco de dados dentro do próprio navegador do user
*/
const savedTheme = localStorage.getItem('theme'); 
// Busca o valor guardado na chave 'theme' e se o user nunca visitou antes, ele retorna null

// Aplica o tema salvo no carregamento da página
applyTheme(savedTheme === 'light');
// Compara se o tema salvo era light (true ou false) e envia o valor pra função que aplica o tema

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

//------

// Evento de click
themeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que o link salte para o topo (comportamento padrão)

    // Altera a classe no body e armazena o resultado
    const isLight = body.classList.toggle('light');
    /* 
    Se a classe .light não estiver lá, ele coloca e vira true e se já estiver, vira false e o resultado é guardado em isLight
    */

    // Atualiza as classes e os ícones
    applyTheme(isLight);

    // Salva a preferência
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

//------

// Barra de progresso
const progressBar = document.getElementById('progress-bar');

// Atualiza a barra durante a rolagem
function updateProgress(){
    // Calcula quanto da página já foi percorrido
    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;

    const progress = alturaTotal > 0
    ? (window.scrollY / alturaTotal) * 100 : 0;

    // Atualiza a largura da barra
    progressBar.style.width = `${progress}%`;
}

// Executa a função ao rolar a página
window.addEventListener('scroll', updateProgress);

// Calcula o progresso inicial
updateProgress();