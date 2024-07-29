let operar = document.getElementById('operar');
        operar.addEventListener('click', () => {
            let formulario = document.forms['formulario'];
            let numero1 = formulario['numero1'];
            let numero2 = formulario['numero2'];
            let operaciones = document.getElementById('operaciones');
            let resultado = 0;
            if(operaciones.value == 'suma'){
                resultado = parseInt(numero1.value) + parseInt(numero2.value);
            } else if(operaciones.value == 'multiplicacion'){
                resultado = parseInt(numero1.value) * parseInt(numero2.value);
            } else if(operaciones.value == 'division'){
                resultado = parseInt(numero1.value) / parseInt(numero2.value);
            } else{
                resultado = parseInt(numero1.value) - parseInt(numero2.value);
            }
            if(isNaN(resultado)){
                resultado = 'Faltan numeros'
            }
            document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
        });