let selectedAvatar = null;

// Função para selecionar o avatar
function selectAvatar(avatar) {
    const avatarImages = document.querySelectorAll('.avatar');
    avatarImages.forEach(img => img.classList.remove('selected'));
    
    const selectedImage = document.querySelector(`img[src="/img/${avatar}"]`);
    selectedImage.classList.add('selected');
    selectedAvatar = `/img/${avatar}`; // Agora armazenamos o caminho completo do avatar
}

// Função para confirmar a escolha do nickname e avatar
function confirmSelection() {
    const nickname = document.getElementById('nickname').value.trim();
    
    if (!nickname) {
        alert("Por favor, insira um nickname!");
        return;
    }
    
    if (!selectedAvatar) {
        alert("Por favor, escolha um avatar!");
        return;
    }

    
    
    // Aqui você pode redirecionar para outra página ou enviar os dados para o backend
}

// Função para selecionar o avatar
function selectAvatar(avatar) {
    localStorage.setItem('avatar', avatar);  // Armazena o avatar escolhido
}

// Função para salvar o nickname no localStorage
document.getElementById('nickname').addEventListener('input', function() {
    localStorage.setItem('nickname', this.value);  // Armazena o nickname digitado
});

// Opcional: Validar que o usuário escolheu um avatar e preencheu o nickname antes de redirecionar
document.querySelector('a').addEventListener('click', function() {
    const nickname = localStorage.getItem('nickname');
    const avatar = localStorage.getItem('avatar');
    
    if (!nickname || !avatar) {
        alert("Por favor, preencha o nickname e escolha um avatar.");
        event.preventDefault();
    }
});

