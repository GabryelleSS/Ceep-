; (function () {

    const form = document.querySelector('.formNovoCartao');

    form.classList.remove('no-js');

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const conteudoCartao = this.querySelector('textarea').value.trim();

        if (conteudoCartao) {
            adicionaCartaoNoMural({conteudo: conteudoCartao});

            this.reset();

        }
        else {

            let msgErro = document.createElement('p');

            msgErro.classList.add('formNovoCartao-msg');
            msgErro.textContent = 'Preencha alguma coisa!';

            this.insertAdjacentElement('afterbegin', msgErro);

            msgErro.addEventListener('animationend', function () {
                this.remove();
            })

        }
    })


    //let cartaoPreenchido = this.querySelector('textarea').value

})();

/* 

    Estudar callback

    trim() formata o texto, ou seja, os espacos em branco;

    reset() limpa os campos do formulario;

    insertAdjacentElement estudar;

    animation eh criado com @keyframes estudar!!!

    //interpolacao apenas acontece quando se usa as crases, passamos para ela um codigo javascript por ${};

*/