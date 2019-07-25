var atividade;

$(document).ready(function() 
{
	atividade = getWKNumState();
	
	if ((atividade == 0) || (atividade == 4))
	{
		preencherSolicitante();
	}
});
window.parent.$("[data-send]").on("click", function(ev)
{
	var filtro = new Object();
	var dataset = new Object();
	filtro["colleagueName"] = document.getElementById("gestor").value;
	dataset = DatasetFactory.getDatasetValues("colleague", filtro);
	document.getElementById("codGestor").value = dataset[0]["colleaguePK.colleagueId"];
});