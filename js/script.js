document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-toggle');
    const dynamicMessage = document.getElementById('mensagem-dinamica');

    trocarMensagemDinamica(dynamicMessage);

    themeButton.addEventListener('click', () => {
        trocarModoEscuroClaro(themeButton);
    });
});

function trocarModoEscuroClaro(botao) {
    document.body.classList.toggle('modo-claro');

    const modoClaroAtivo = document.body.classList.contains('modo-claro');
    botao.innerHTML = modoClaroAtivo
        ? '<i class="bi bi-moon-stars-fill me-1"></i>Modo escuro'
        : '<i class="bi bi-brightness-high-fill me-1"></i>Modo claro';
}

function trocarMensagemDinamica(elementoMensagem) {
    const horaAtual = new Date().getHours();
    let mensagem = 'Bem-vindo a TXGames! Confira nossos jogos digitais.';

    if (horaAtual >= 5 && horaAtual < 12) {
        mensagem = 'Bom dia! Comece sua jornada com um novo jogo.';
    } else if (horaAtual >= 12 && horaAtual < 18) {
        mensagem = 'Boa tarde! Que tal explorar uma nova aventura hoje?';
    } else {
        mensagem = 'Boa noite! Hora perfeita para zerar mais um desafio.';
    }

    elementoMensagem.textContent = mensagem;
}
