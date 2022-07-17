const submit = document.getElementById('botao');

let toastContainer;

//Função que gera os toasts, passando como parâmetro um objeto.
//Esse objeto contem como atributo: mensagem, cor de fundo, cor da fonte e tempo de aparição
function generateToast({
    message,
    background = '#00214d',
    color = '#fefefe',
    length = '3000ms'
}){

    toastContainer.insertAdjacentHTML('beforeend',
    `<p class="toast"
    style="background-color: ${background};
    color: ${color};
    animatio-duration: ${length}">
    ${message}
    </p>`)
    const toast = toastContainer.lastElementChild;
    toast.addEventListener('animationend', () => toast.remove())
}

(function initToast() {
    document.body.insertAdjacentHTML('afterbegin', `<div class="toast-container"></div>`);
    toastContainer = document.querySelector('.toast-container');
})()


submit.addEventListener('click', () => {
    generateToast({
        message: 'Pedido enviado com sucesso!',
        background: '0d0d0d',
        color: '#fdfdf',
        length: '5000ms',
    })
})

