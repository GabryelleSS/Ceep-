;(function(){
    const btn = document.querySelector('#btnSync');

    btn.addEventListener('click', function(){

        this.classList.add('botaoSync--esperando');
        this.classList.remove('botaoSync--sincronizado');

        //Lista vazia, que esper receber os objetos dos cartoes;
        let listaDeObjetosCartoes = [];
        
        //Selecionar todos os cartoes
        const listaDeCartoes = document.querySelectorAll('.cartao');

        //percorrer a lista de elementos cartoes, com o 'for';
        for(let cartao of listaDeCartoes){
            // Localizar o conteudo e a cor de cada cartao;
            // Dentro do querySelector tem que ter uma string e sempre retorna um elemento HTML;
            let texto = cartao.querySelector('.cartao-conteudo').textContent;

            //Elemento de formulario selecionamento pelo value
            // let cor = cartao.querySelector('input:checked').value;

            let cor = getComputedStyle(cartao).getPropertyValue('background-color');
            
            //Criar um objeto com {} com o conteudo e a cor
            let conteudoCorCartao = {
                conteudo: texto,
                cor: cor
            }

            // Inserir o objeto na listaDeObjetosCartoes com o push
            //Como lista de um array se ultiliza o push
            listaDeObjetosCartoes.push(conteudoCorCartao);
            
        }//Fim do for

        let dadosUser = {
            usuario: 'Gaby',
            cartoes: listaDeObjetosCartoes
        }

        //Criar uma API
        const conexaoApi = new XMLHttpRequest;
        conexaoApi.open('POST', 'http://ceep.herokuapp.com/cartoes/salvar/');

        //Padrao HTTP, preciso avisar a API o tipo de dado que estou enviando 
        conexaoApi.setRequestHeader('Content-Type', 'application/json');

        conexaoApi.send(JSON.stringify(dadosUser));

        //Quando recebemos a resposta do servidor com load;
        //Preserva o escopo do pai, o this continua sendo o botao
        conexaoApi.addEventListener('load', () => {
            //parse dentro do JSON pega as string em objetos;
            let resposta = JSON.parse(conexaoApi.response);

            this.classList.remove('botaoSync--esperando');
            this.classList.add('botaoSync--sincronizado');

            console.log(`${resposta.quantidade} cartoes de ${resposta.usuario} gravados com sucesso!`);
        })
        conexaoApi.addEventListener('error', () => {
            this.classList.add('botaoSync--deuRuim');
            this.classList.remove('botaoSync--esperando');
        })
    
    })

    btn.classList.remove("no-js");


})()