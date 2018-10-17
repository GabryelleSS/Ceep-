;(function(){

    $.ajax({
        url: 'http://ceep.herokuapp.com/cartoes/carregar',
        method: 'GET',
        data: {usuario: 'Gaby'},
        dataType: 'jsonp',
        success: function(objetoResposta){
            let cartoes = objetoResposta.cartoes;

            for(let cartao of cartoes){
                adicionaCartaoNoMural(cartao);
            }
        }
    })
})()

//Pesquisar o que eh cors
//MInha XHR nao pode ser de apis diferentes, servidor e cliente 
