// Função para criar um objeto aluno com nome, email e matéria favorita
function criarAluno() {
    const nome = prompt("Digite o nome do aluno:");
    const email = prompt("Digite o email do aluno:");
    const materiaFavorita = prompt("Digite a matéria favorita do aluno:");

    return {
        nome,
        email,
        materiaFavorita
    };
}

// Função para adicionar um card de aluno ao HTML
function adicionarCardAluno(aluno) {
    const mainElement = document.querySelector("main");

    const cardElement = document.createElement("div");
    cardElement.classList.add("card");

    cardElement.innerHTML = `
        <h2>${aluno.nome}</h2>
        <p>Email: ${aluno.email}</p>
        <p>Matéria Favorita: ${aluno.materiaFavorita}</p>
    `;

    mainElement.appendChild(cardElement);
}

// Cria e adiciona 10 alunos dinamicamente
for (let i = 0; i < 10; i++) {
    const aluno = criarAluno();
    adicionarCardAluno(aluno);
}
