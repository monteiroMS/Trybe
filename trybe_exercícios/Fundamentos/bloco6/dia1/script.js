let campoNome = formulario.user;
let campoEmail = formulario.email;
let campoOpcoes = formulario.radioInput;
let campoResposta = formulario.respostaInput;
let campoData = formulario.dataInput;
let campoCheck1 = formulario.checkbox1;
let campoCheck2 = formulario.checkbox2;
let botaoEnviar = formulario.sendButton;
let botaoApagar = formulario.eraseButton;
let validation = 0;

function validarNome(event) {
    if (campoNome.value.length < 10 || campoNome.value.length >40) {
        validation -= 1;
    } else {
        validation += 1;
    }
}

function validarEmail(event) {
    if (campoEmail.value.length < 10 || campoEmail.value.length >50) {
        validation -= 1;
    } else {
        validation += 1;
    }
}

function validarCampoResposta(event) {
    if (campoResposta.value.length === 0 || campoResposta.value.length > 500) {
        validation -= 1;
    } else {
        validation += 1;
    }
}

botaoEnviar.addEventListener('click', function(event) {
    validarNome(event);
    validarEmail(event);
    validarCampoResposta(event);
    if (validation === 3) {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    } else {
        alert('Dados inválidos')
        event.preventDefault();
    }
})