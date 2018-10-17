const btn = document.querySelector('#btnMudaLayout');
const mural = document.querySelector('.mural');

const mudaTexto = function() {
    if(this.innerText == 'Linhas') {
        this.innerText = 'Blocos';
    } else {
        this.innerText = 'Linhas';
    }
}

const mudaLayout = function(){
        mural.classList.toggle('mural--linha');
}

btn.addEventListener('click', mudaTexto);
btn.addEventListener('click', mudaLayout);

btn.classList.remove('no-js');