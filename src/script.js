function calcula(){
    var valorPlano = document.querySelector('input[name=valor]:checked').value;
    var dataInicio = new Date(document.querySelector('input[name=dataInicio]').value);
    var dataFim = new Date(document.querySelector('input[name=dataFim]').value);
    
    //checar se os campos de datas foram preenchidos corretamente
    if((!Date.parse(dataInicio)) || (!Date.parse(dataFim))){
        alert("Preencha corretamente os campos de data");
        return;
    }

    //evita que o usuário coloque uma data fim menor que a data inicio
    if(dataFim < dataInicio){
        alert("A data final deve ser maior que a inicial");
        return;
    }

    //864000000 ms em um dia
    var diasUtilizados = (dataFim - dataInicio)/86400000;
    var valor = ((diasUtilizados/30)*valorPlano).toFixed(2);

    //formata a frase que será mostrada para o usuário
    var resultado = "O valor a ser pago para utilizar por " + diasUtilizados + " dias o plano de R$ " + parseFloat(valorPlano).toFixed(2) + " é: <b>R$ " + valor + "</b>";

    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("resultado").removeAttribute('hidden');
}