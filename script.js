const botaoAbrir = document.querySelector("header > button"); // Botão de abrir menu
const botaoFechar = document.querySelector("header nav button"); // Botão de fechar menu

const body = document.querySelector("body");
const nav = document.querySelector("header nav.mobile"); // Seleciona o menu mobile corretamente

// Adiciona eventos de clique aos botões
botaoAbrir.addEventListener('click', abrirMenu);
botaoFechar.addEventListener('click', fecharMenu);

// Função para abrir o menu
function abrirMenu() {
    body.classList.add("dark"); // Adiciona a classe para escurecer o fundo
    nav.classList.add("open"); // Adiciona a classe para abrir o menu
}

// Função para fechar o menu
function fecharMenu() {
    body.classList.remove("dark"); // Remove a classe que escurece o fundo
    nav.classList.remove("open"); // Remove a classe que abre o menu
}

document.querySelector('.search-container button').addEventListener('click', function() {
    const query = document.querySelector('.search-container input').value;
    if (query) {
        window.location.href = `search-results.html?query=${encodeURIComponent(query)}`;
    }
});
