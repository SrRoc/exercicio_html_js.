const form = document.getElementById('form-verify');

let comparacaoValores = false;

function validaCampo(segundoCampo,primeiroCampo) {
    const resultadocomparacao = segundoCampo > primeiroCampo;
    return resultadocomparacao;
}

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const valorCampoA = document.getElementById('campo-a');
    const valorCampoB = document.getElementById('campo-b');
    const mensagemSucesso = `Sucesso - Você Preencheu todos os Campos Corretamente !!!`;
    const mensagemError = `Erro - O Valor do Campo B deve ser maior que o do Campo A !!!`;

    comparacaoValores = validaCampo(valorCampoB.value,valorCampoA.value)
    
    if (comparacaoValores) {
        const containerMensagemSucesso = document.querySelector('.alert-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemSucesso.style.backgroundColor = '#27ae60';
        

        valorCampoA.value = '';
        valorCampoB.value = '';

    } else {        
        valorCampoA.style.border = '1px solid red';
        const containerMensagemError = document.querySelector('.alert-message');
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';
        containerMensagemError.style.backgroundColor = '#fa0000';

        
    }
});

