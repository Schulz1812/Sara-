// Função para obter a hora atual
function getHoraAtual() {
    const agora = new Date();
    const hora = agora.getHours();
    return hora;
}

// Função para atualizar a mensagem com base na hora
function atualizarMensagem() {
    const mensagemElement = document.getElementById("mensagem");
    const horaAtual = getHoraAtual();

    if (horaAtual >= 6 && horaAtual < 12) {
        mensagemElement.textContent = "Bom dia!";
    } else if (horaAtual === 12) {
        mensagemElement.textContent = "Hora do Almoço!";
    } else if (horaAtual >= 13 && horaAtual <= 17) {
        mensagemElement.textContent = "Boa tarde!";
    } else if (horaAtual >= 18 && horaAtual <= 23) {
        mensagemElement.textContent = "Boa noite!";
    } else if (horaAtual === 0) {
        mensagemElement.textContent = "Não disse que ia dormir mais cedo hoje?";
    } else if (horaAtual >= 1 && horaAtual <= 5) {
        mensagemElement.textContent = "Não está na Netflix, está?";
    } else {
        mensagemElement.textContent = "Mensagem padrão para outras horas do dia.";
    }
}

// Chama a função para atualizar a mensagem quando a página é carregada
atualizarMensagem();
