function operacao(op) {
    var valor1 = document.getElementById('valor1').value;
    var valor2 = document.getElementById('valor2').value;
    var resultado = document.getElementById('resultado').value;

    if (valor1 === '' || valor2 === ''){
        document.getElementById('resultado').innerText = "Valores em branco, tente novamente!";
    }
    else {
        calcular(parseFloat(valor1), parseFloat(valor2), op);
    }
}

function calcular(valor1, valor2, op){

    let resultado;

    switch (op) {
        case 'adicao':
            resultado = valor1 + valor2;
            break;

        case 'multiplicacao':
            resultado = valor1 * valor2;
            break;

        case 'divisao':
            resultado = valor2 !== 0 ? valor1 / valor2 : "Não é permitido divisões por 0!";
            break;

        case 'subtracao':
            resultado = valor1 - valor2;
            break;

        default:
            resultado = "Operação não realizada, tente novamente!";
            break;
    }
    
    return document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}