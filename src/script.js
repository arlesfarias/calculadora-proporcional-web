function calcula(){
    var valorPlano = document.querySelector('input[name=valor]:checked').value;
    var dataInicio = new Date(document.querySelector('input[name=dataInicio]').value);
    var dataFim = new Date(document.querySelector('input[name=dataFim]').value);
    //864000000 ms em um dia
    var diasUtilizados = (dataFim - dataInicio)/86400000;
    var resultado = ((diasUtilizados/30)*valorPlano).toFixed(2);
    
    document.getElementById("resultado").innerHTML = resultado;
}