const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => { Programação do hopi hari parea a hora do horror 2024
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })