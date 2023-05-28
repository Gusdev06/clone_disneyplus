document.addEventListener('DOMContentLoaded', function() { // Ouve o evento 'DOMContentLoaded' que é acionado quando o DOM é completamente carregado.

    
    const buttons = document.querySelectorAll('[data-tab-button]'); // Seleciona todos os elementos que possuem o atributo personalizado 'data-tab-button' e armazena em 'buttons'.
    const question = document.querySelectorAll('[data-faq-question]'); // Seleciona todos os elementos que possuem o atributo personalizado 'data-faq-question' e armazena em 'question'.

    const HeroSection = document.querySelector('.hero')
    const alturaHero = HeroSection.clientHeight;

    window.addEventListener('scroll', function () {
		const posicaoAtual = window.scrollY

        if(alturaHero > posicaoAtual) {
            ocultaElementosHeader()
        } else {
            exibeElemetnosHeader()
        }
})

function ocultaElementosHeader() {
    const header = document.querySelector('header')
    header.classList.add('header--is-hidden')
}

function exibeElemetnosHeader() {
    const header = document.querySelector('header')
    header.classList.remove('header--is-hidden')
}


    for(let i = 0; i < buttons.length; i++) { // Percorre todos os botões e adiciona um ouvinte de evento de clique a cada um.
        buttons[i].addEventListener('click', function(botao) { // Quando um botão é clicado, a função de callback é executada.
            const abaAlvo = botao.target.dataset.tabButton // Obtém o valor do atributo personalizado 'data-tab-button' do botão clicado.
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`) // Seleciona o elemento que possui o atributo 'data-tab-id' correspondente ao valor obtido anteriormente.
            escondeTodasAbas(); // Executa a função 'escondeTodasAbas()' para remover a classe 'shows__list--is-active' de todos os elementos com o atributo 'data-tab-i
            aba.classList.add('shows__list--is-active') // Adiciona a classe 'shows__list--is-active' ao elemento selecionado.
            removeBotaoAtivo()  // Executa a função 'removeBotaoAtivo()' para remover a classe 'shows__tabs__button--is-active' de todos os botões.
            botao.target.classList.add('shows__tabs__button--is-active') // Adiciona a classe 'shows__tabs__button--is-active' ao botão clicado.
        })
    }

    for (let i = 0 ;i < question.length; i++) { // Percorre todos os elementos de pergunta e adiciona um ouvinte de evento de clique a cada um.
        question[i].addEventListener('click', abre_ou_fecha_resposta) // Quando um elemento de pergunta é clicado, a função 'abre_ou_fecha_resposta' é chamada.
    }
})

function abre_ou_fecha_resposta(elemento) { // Define a função 'abre_ou_fecha_resposta' que é chamada quando um elemento de pergunta é clicado.
    const classe = 'faq__question__item--is-open'; // Obtém a classe 'faq__question__item--is-open' e a armazena em 'classe'.
    const elementopai = elemento.target.parentNode; // Obtém o elemento pai do elemento clicado e o armazena em 'elementopai'.

    elementopai.classList.toggle(classe) // Alterna a presença da classe 'faq__question__item--is-open' no elemento pai, ou seja, adiciona a classe se ela não estiver presente e remove a classe se ela estiver presente.
}

function removeBotaoAtivo() { // Define a função 'removeBotaoAtivo' que remove a classe 'shows__tabs__button--is-active' de todos os botões.
    const buttons = document.querySelectorAll('[data-tab-button]'); // Seleciona todos os elementos que possuem o atributo personalizado 'data-tab-button' e armazena em 'buttons'.

    for(let i = 0; i < buttons.length; i++) {  // Percorre todos os botões e remove a classe 'shows__tabs__button--is-active'.
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }

}

function escondeTodasAbas() { // Define a função 'escondeTodasAbas' que remove a classe 'shows__list--is-active' de todos os elementos com o atributo 'data-tab-id'.
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); // Seleciona todos os elementos com o atributo 'data-tab-id' e armazena em 'tabsContainer'.

    for(let i = 0; i < tabsContainer.length; i++) { // Percorre todos os elementos e remove a classe 'shows__list--is-active'.
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}