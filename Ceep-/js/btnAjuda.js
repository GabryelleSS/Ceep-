; (function () {
    const btnAjuda = document.querySelector('#btnAjuda');

    let listaDeAjudas = [
              
    ];


    btnAjuda.classList.remove('no-js');

    btnAjuda.addEventListener('click', function () {

        const conexaoApi = new XMLHttpRequest();

        conexaoApi.open('GET', 'http://ceep.herokuapp.com/cartoes/instrucoes');
        conexaoApi.responseType = 'json';
        conexaoApi.send();

        conexaoApi.addEventListener('load', function(){
            listaDeAjudas = conexaoApi.response.instrucoes        
            
            for (let ajuda of listaDeAjudas) {
            adicionaCartaoNoMural(ajuda);
        }
        })



    });
})();

/*
    IIFE sempre criar direto um ()();

    for = da mais opcoes, o for eh um laco;
    forEach = comeca no zero, incrementa de um em um e vai ate o final da lista, forEach eh um metodo;

    listaDeAjudas.forEach(function(listaDeAjudas){
        console.log(ajuda);
        adicionaCartaoNoMural(ajuda.conteudo);
    })

    for(let textoAjuda of listaDeAjuda){
        alert(textoAjuda);
    }

    for(let indice in listaDeAjuda){
        console.log(indice) //imprime os indices, ou seja, os numeros das posicoes das listas;
    }

    ctrl + shift + a;
*/