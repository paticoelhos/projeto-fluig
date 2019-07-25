var atividade;

$(document).ready(function(){
	atividade = getWKNumState();

	// Solicitante
	if (atividade == 0 || atividade == 1)
		preencherSolicitante();

	var onlyDate = FLUIGC.calendar('#dataExecucao', {
	    pickDate: true,
	    pickTime: false
	});
});

function insereCodigoUsuario(nomeCampo){
	var filtro = new Object();
	var dataset = new Object();
	filtro["colleagueName"] = document.getElementById(nomeCampo).value;
	dataset = DatasetFactory.getDatasetValues("colleague", filtro);
	$("#destino").val(dataset[0]["colleaguePK.colleagueId"]);
}
function usuarioDestino(){
	var acao = $("#acaoSolicitacao option:selected").val();
	if (acao == "enviaUsuario")
		$("#divTransferencia").show();
	else{
		$("#divTransferencia").hide();
		$("#destino").val("");
		document.getElementById("destinoTransferencia").options[0].remove();
	}
}
$(document).on('change', "#destinoTransferencia", function (){
	insereCodigoUsuario("destinoTransferencia");
});
$(document).on('click', "#mudancaEmProducao", function (){
	if  ($("input[name='mudancaEmProducao']:checked").val() == "Não")
		$("#divAcao").show();
	else{
		$("#divAcao").hide();
		$("#divTransferencia").hide();
		$('#acaoSolicitacao').val("");
	}
});
