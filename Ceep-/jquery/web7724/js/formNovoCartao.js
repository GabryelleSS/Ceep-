;(function(){

    const form = document.querySelector('.formNovoCartao');

    form.classList.remove('no-js');

    form.addEventListener('submit', function(event){

        event.preventDefault();

        const conteudoCartao = this.querySelector('textarea').value.trim();

        if(conteudoCartao){
            console.log(conteudoCartao)

            this.reset();
        } 
        else{
            
            let msgErro = document.createElement('p');

            msgErro.classList.add('formNovoCartao-msg');
            msgErro.textContent = 'Preencha alguma coisa!';

            console.log(msgErro);

            this.insertAdjacentElement('afterbegin', msgErro);

            msgErro.addEventListener('animationend', function(){
                this.remove();
            })
            
        }
    })

    let novoCartao = document.createElement('article');
    
    let cartaoPreenchido = this.querySelector('textarea').value



})();

/* 

    Estudar callback

    trim() formata o texto, ou seja, os espacos em branco;

    reset() limpa os campos do formulario;

    insertAdjacentElement estudar;

    animation eh criado com @keyframes estudar!!!


*/