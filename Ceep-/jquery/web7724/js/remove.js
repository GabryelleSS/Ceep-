//const btn = document.querySelector('.opcoesDoCartao-remove')

; (function () {

    const btns = document.querySelectorAll('.opcoesDoCartao-remove')

    for (let indice = 0; indice < btns.length; indice++) {

        console.log(indice);

        let btn = btns[indice];

        //Sempre tem que vir uma funcao apos os eventos
        btn.addEventListener('click', function () {

            //parentNode ou parentElement remove o elemento pai;
            const cartao = this.parentNode.parentNode;

            cartao.classList.add('cartao--some');

            cartao.addEventListener('transitionend', function () {
                // quando a transicao acabar, end, ele remove

                this.remove();
            })
        })
    }
})();


//O parametro invoca a funcao que nao eh global e sim local

