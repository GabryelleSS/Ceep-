; (function () {

    const cartoes = document.querySelectorAll('.cartao');

    for (let indice = 0; indice < cartoes.length; indice++) {

        const cartao = cartoes[indice];

        cartao.addEventListener('focusin', function (evento) {

            this.classList.add('cartao--focado');

        });

        cartao.addEventListener('focusout', function () {

            this.classList.remove('cartao--focado');

        });

        cartao.addEventListener('change', function (evento) {
            console.log(evento)

            // constains retorna 'true' ou 'false' se tiver ou nao a classe;
            let isRadioTipo = evento.target.classList.contains('opcoesDoCartao-radioTipo');

            if (isRadioTipo) {

                this.style.backgroundColor = evento.target.value;

            }

        });

        cartao.addEventListener('keydown', function (evento) {

            let isLabel = evento.target.classList.contains('opcoesDoCartao-opcao');



            if (isLabel && evento.code == 'Enter' || evento.code == 'Space') {

                evento.target.click();

            }
        });

        cartao.addEventListener('click', function(evento){

            console.log(evento);
            let isButton = evento.target.classList.contains('opcoesDoCartao-remove');

            if (isButton){
                this.classList.add('cartao--some');

                this.addEventListener('transitionend', function(){

                    this.remove();
                });
            }

        });

    }

})();

/*

    function(evento);
    bobble
    com o target = nos ajuda a saber quem fez o evento;

    this.style.background-color NAO PODE, DEVE SER CAMEL CASE!!!!!

    target = selecionar o valor, quem esta emitindo o evento

    console.log(evento.target.value)
    evento(tudo do evento);
    evento.target(guarda a referencia do elemento que emitiu o eveto);
    evento.target.value(acessa o value do elemento que emetiu o evento);

    bubbles:  o bolha vai subindo para todas as tags que estao acima;
    para ver as tags que vao ser atigindas = console.log(evento=objeto);
    dentro do path;

    change = emitido pelo input
    
*/