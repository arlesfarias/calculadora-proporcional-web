function calcula(){
    var valorPlano = document.querySelector('input[name=valor]:checked').value;
    var dataInicio = new Date(document.querySelector('input[name=dataInicio]').value);
    var dataFim = new Date(document.querySelector('input[name=dataFim]').value);
    
    //checar se os campos de datas foram preenchidos corretamente
    if((!Date.parse(dataInicio)) || (!Date.parse(dataFim))){
        alert("Preencha corretamente os campos de data");
        return;
    }

    //864000000 ms em um dia
    var diasUtilizados = (dataFim - dataInicio)/86400000;
    var resultado = ((diasUtilizados/30)*valorPlano).toFixed(2);
    
    document.getElementById("resultado").innerHTML = resultado;
}