// Seleciona elementos
const generateButton = document.getElementById('generateSession');
const sessionsList = document.getElementById('sessionsList');

// Função para gerar uma URL aleatória
function generateRandomURL() {
    const randomString = Math.random().toString(36).substr(2, 8); // Gera um ID aleatório
    return `/aluno/aluno.html?sessao=${randomString}`;
}

// Adiciona a sessão na lista
function addSessionToList(url) {
    const sessionItem = document.createElement('div');
    sessionItem.classList.add('session-item');

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.textContent = url;

    const button = document.createElement('button');
    button.textContent = 'Gerar Respostas';
    button.addEventListener('click', () => {
        // Redireciona para a página gerar.html
        const gerarURL = `/gerar.html?sessao=${url.split('=')[1]}`;
        window.location.href = gerarURL;
    });

    sessionItem.appendChild(link);
    sessionItem.appendChild(button);
    sessionsList.appendChild(sessionItem);
}

// Adiciona evento ao botão
generateButton.addEventListener('click', () => {
    const url = generateRandomURL();
    addSessionToList(url);
});
