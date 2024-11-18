$(document).ready(function() {
  let folderCount = 4; // Número inicial de pastas (considerando que já existem 4 pastas iniciais)

  // Função para gerar cor hexadecimal aleatória
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Função para adicionar uma nova pasta dinamicamente
  $("#addFolderBtn").on("click", function() {
    // Solicita ao usuário o nome da nova pasta
    const folderName = prompt("Digite o nome da nova pasta:");
    if (!folderName) {
      alert("O nome da pasta não pode ser vazio!");
      return;
    }

    folderCount++;
    const newFolderId = 'folder' + folderCount;
    const randomColor = getRandomColor(); // Gera a cor aleatória para o ícone da pasta

    // Adiciona a nova pasta na seção esquerda com a cor aleatória no ícone
    $(".left").append(`
      <div class="top-droppable folder tooltiper tooltiper-up" data-tooltip="0 arquivos" id="${newFolderId}">
        <i class="fa fa-folder" aria-hidden="true" style="color: ${randomColor};"></i>
        <i class="fa fa-check" aria-hidden="true"></i>
        <p>${folderName}</p>
      </div>
    `);

    // Evento de clique duplo para redirecionar para o arquivo exemplo.html
    $("#" + newFolderId).dblclick(function() {
      window.location.href = 'exemplo.html';
    });
  });

  // Redirecionar para exemplo.html ao clicar duas vezes nas pastas existentes
  $(".folder").dblclick(function() {
    window.location.href = 'exemplo.html';
  });
});
