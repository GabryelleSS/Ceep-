; (function () {

    'use strict';

    let numeroCartao = 0;

    window.adicionaCartaoNoMural = function (objetoCartao) {
        //para createElement, precisa ter um document;
        const novoCartao = document.createElement('article'),
            listaCartoes = document.querySelectorAll('.cartao');
            //a lista de cartoes possui o lenght e da pra contar a quantidade de cartoes;
            //numeroCartao = `cartao_${listaCartoes.length + 1}`;

        novoCartao.innerHTML = `
                
                <div class="opcoesDoCartao">
                <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                  <svg><use xlink:href="#iconeRemover"></use></svg>
                </button>
      
                <input type="radio" name="corDoCartao${numeroCartao}" value="#EBEF40" id="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo" checked>
                <label for="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                  Padrão
                </label>
      
                <input type="radio" name="corDoCartao${numeroCartao}" value="#F05450" id="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                  Importante
                </label>
      
                <input type="radio" name="corDoCartao${numeroCartao}" value="#92C4EC" id="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                  Tarefa
                </label>
      
                <input type="radio" name="corDoCartao${numeroCartao}" value="#76EF40" id="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                  Inspiração
                </label>
              </div>
              
              <p class="cartao-conteudo" contenteditable tabindex="0">${objetoCartao.conteudo}</p>
              `;

        novoCartao.id = `cartao_${numeroCartao}`;
        //percorre as classes que possuem a classe 'cartao';
        novoCartao.classList.add('cartao');
        novoCartao.tabIndex = 0;
        /*
        novoCartao.className = 'bolinha', porem o classList eh melhor.
        novoCartao.setAttribute('tabindex', 'casa');
        */

        //novoCartao.id = 'cartao_' + parseFloat(listaCartoes.length + 1); 

        novoCartao.addEventListener('focusin', function (evento) {

            this.classList.add('cartao--focado');

        });

        novoCartao.addEventListener('focusout', function () {

            this.classList.remove('cartao--focado');

        });

        novoCartao.addEventListener('change', function (evento) {

            // constains retorna 'true' ou 'false' se tiver ou nao a classe;
            let isRadioTipo = evento.target.classList.contains('opcoesDoCartao-radioTipo');

            if (isRadioTipo) {

                this.style.backgroundColor = evento.target.value;

            }

        });

        novoCartao.addEventListener('keydown', function (evento) {

            let isLabel = evento.target.classList.contains('opcoesDoCartao-opcao');



            if (isLabel && evento.code == 'Enter' || evento.code == 'Space') {

                evento.target.click();

            }
        });

        novoCartao.addEventListener('click', function (evento) {
            let isButton = evento.target.classList.contains('opcoesDoCartao-remove');

            if (isButton) {
                this.classList.add('cartao--some');

                this.addEventListener('transitionend', function () {

                    this.remove();
                });
            }

        });

        if (objetoCartao.cor) {
            //muda a cor do article de acordo com a cor recebida do objeto por parametro;
            novoCartao.style.background = objetoCartao.cor;

            //Seleciona o input que estiver o mesmo value da cor passada por parametro;
            let selecionarBotao = novoCartao.querySelector(`[value='${objetoCartao.cor}']`);

            if(selecionarBotao){
                //apos encontrar o input com aquela cor, checa ele e seleciona;
                selecionarBotao.checked = true;
            }
            
        }

        //procurar a classe mural;
        let mural = document.querySelector('.mural');

        mural.insertAdjacentElement('afterbegin', novoCartao);

        numeroCartao++

    }

})()