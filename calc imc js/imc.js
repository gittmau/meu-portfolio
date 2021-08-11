//Calcular IMC

function imc() {

    var calc = eval(document.formulario.peso.value) / eval(document.formulario.altura.value);

    document.formulario.result.value = calc;

    var CampoPeso = (document.formulario.peso.value)
    var CampoAltura = (document.formulario.altura.value)

    if (CampoPeso == "") {

        alert('Preecher o campo Peso.')
        return false
    }

    if (CampoAltura == "") {

        alert('Preecher o campo Altura.')
        return false
    }

    if (calc < 18) {

        alert('Magreza')
        return false

    }

    if (calc < 25) {

        alert('Normal')

        return false
    }    

    if(calc >25) { 

        alert('Sobre peso rumo a obesidade')
        return false
    }  

    

    

    


   
}