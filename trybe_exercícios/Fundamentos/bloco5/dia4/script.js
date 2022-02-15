// Função que mude a cor de fundo da tela
function mudaCorDeFundo() {
    let mainText = document.querySelector('main');
    let inputBackground = document.querySelector('#input-background');
    let buttonBackground = document.querySelector('#background');
    buttonBackground.addEventListener('click', function() {
        if (mainText.style.backgroundColor === '') {
            mainText.style.backgroundColor = 
            inputBackground.value;
            localStorage.setItem('corDeFundo', inputBackground.value);
            inputBackground.value = '';
        } else {
            mainText.style.backgroundColor = '';
            localStorage.setItem('corDeFundo', inputBackground.value);
        }
    })
}
mudaCorDeFundo();

// Função que mude a cor do texto
function mudaCorDoTexto() {
    let mainText = document.querySelector('main');
    let inputColor = document.querySelector('#input-textcolor');
    let buttonColor = document.querySelector('#textcolor');
    buttonColor.addEventListener('click', function() {
        if (mainText.style.color === '') {
            mainText.style.color = inputColor.value;
            localStorage.setItem('corDoTexto', inputColor.value);
            inputColor.value = '';
        } else {
            mainText.style.color = '';
            localStorage.setItem('corDoTexto', inputColor.value);
        }
    })
}
mudaCorDoTexto();

// Função que mude o tamanho da fonte do texto
function mudaTamanhoDaFonte() {
    let mainText = document.querySelector('main');
    let inputTextSize = document.querySelector('#input-textsize');
    let buttonTextSize = document.querySelector('#textsize');
    buttonTextSize.addEventListener('click', function() {
        if (mainText.style.fontSize === '') {
            mainText.style.fontSize = inputTextSize.value;
            localStorage.setItem('tamanhoDaFonte', inputTextSize.value);
            inputTextSize.value = '';
        } else {
            mainText.style.fontSize = '';
            localStorage.setItem('tamanhoDaFonte', inputTextSize.value);
        }
    })
}
mudaTamanhoDaFonte();

// Função que mude o espaçamento entre linhas
function mudaEspacamentoLinhas() {
    let mainText = document.querySelector('main');
    let inputLineSize = document.querySelector('#input-linespace');
    let buttonLineSize = document.querySelector('#linespace');
    buttonLineSize.addEventListener('click', function() {
        if (mainText.style.lineHeight === '') {
            mainText.style.lineHeight = inputLineSize.value;
            localStorage.setItem('espaçamentoEntreLinhas', inputLineSize.value);
            inputLineSize.value = '';
        } else {
            mainText.style.lineHeight = '';
            localStorage.setItem('espaçamentoEntreLinhas', inputLineSize.value);
        }
    })
}
mudaEspacamentoLinhas();

// Função que mude a fonte do texto
function mudaFonteDoTexto() {
    let mainText = document.querySelector('main');
    let inputTextFont = document.querySelector('#input-textfont');
    let buttonTextFont = document.querySelector('#textfont');
    buttonTextFont.addEventListener('click', function() {
        if (mainText.style.fontFamily === '') {
            mainText.style.fontFamily = inputTextFont.value;
            localStorage.setItem('fonteDoTexto', inputTextFont.value);
            inputTextFont.value = '';
        } else {
            mainText.style.fontFamily = '';
            localStorage.setItem('fonteDoTexto', inputTextFont.value);
        }
    })
}
mudaFonteDoTexto();

// Função que restaura configurações anteriores da página
function restoreAll() {
    let buttonRestore = document.querySelector('#restore');
    buttonRestore.addEventListener('click', function () {
        let mainText = document.querySelector('main');
        let background = localStorage.getItem('corDeFundo');
        let color = localStorage.getItem('corDoTexto');
        let fonteTamanho = localStorage.getItem('tamanhoDaFonte');
        let espacamento = localStorage.getItem('espaçamentoEntreLinhas');
        let fonteTexto = localStorage.getItem('fonteDoTexto');
        mainText.style.backgroundColor = background;
        mainText.style.color = color;
        mainText.style.fontSize = fonteTamanho;
        mainText.style.lineHeight = espacamento;
        mainText.style.fontFamily = fonteTexto;
    });
}

restoreAll();

// Função que limpa o localStorage
function clearAll() {
    let buttonClear = document.querySelector('#clear');
    buttonClear.addEventListener('click', function () {
        localStorage.clear();
        let mainText = document.querySelector('main');
        let background = localStorage.getItem('corDeFundo');
        let color = localStorage.getItem('corDoTexto');
        let fonteTamanho = localStorage.getItem('tamanhoDaFonte');
        let espacamento = localStorage.getItem('espaçamentoEntreLinhas');
        let fonteTexto = localStorage.getItem('fonteDoTexto');
        mainText.style.backgroundColor = background;
        mainText.style.color = color;
        mainText.style.fontSize = fonteTamanho;
        mainText.style.lineHeight = espacamento;
        mainText.style.fontFamily = fonteTexto;
    });
}
clearAll();