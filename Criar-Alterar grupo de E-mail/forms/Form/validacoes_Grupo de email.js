var atividade;

$(document).ready(function(){
	atividade = getWKNumState();
	var tipo = document.getElementById('tipo').value;

	if ((atividade == 0) || (atividade == 8))	{
		preencherSolicitante();
	}

	if (tipo == "novo")	{
		var targetComponente = FLUIGC.datatable('#targetComponente',{
			dataRequest: [],
		    renderContent: ['nome', 'email', 'setor'],
		    header: [
		        {'title': 'Nome', 'size': 'col-md-4', 'standard': true},
		        {'title': 'E-mail', 'size': 'col-md-4'},
		        {'title': 'Setor', 'size': 'col-md-4'}
		    ],
			search: {enabled: false}
		}, function(err, data){
		});

		var componentes = document.getElementById('componentes').value;
		var compArray = componentes.split(",");
	    var filter = new Object();
		var dataset = new Object();

		for (var i = 0; i < compArray.length; i++){
			filter["colleagueName"] = compArray[i];
			dataset = DatasetFactory.getDatasetValues("colleague", filter);

	    	nome = dataset[0]["colleagueName"];
	    	email = dataset[0]["mail"];
	    	setor = dataset[0]["groupId"];
	    	var row = {nome: nome, email: email, setor: setor};
	    	targetComponente.addRow(null, row);
		}
	}
});
$(document).on('change', "#zoomComponentes", function (){
	document.getElementById('componentes').value = zoomComponentes.getSelectedItems();
});
window.parent.$("[data-send]").on("click", function(ev){
	var tipo = document.getElementById('tipo').value;
	var txJustificativa = document.getElementById('txJustificativa').value;

	if (atividade == 0 || atividade == 8){
		if (tipo == "novo"){
			var filtro = new Object();
			var dataset = new Object();
			filtro["colleagueName"] = document.getElementById("responsavelNovoGrupo").value;
			dataset = DatasetFactory.getDatasetValues("colleague", filtro);
			document.getElementById("codGestor").value = dataset[0]["colleaguePK.colleagueId"];
			document.getElementById("respNovoGrupo").value = document.getElementById("responsavelNovoGrupo").value;
		}
		if (tipo == "altera"){
			if (txJustificativa != ""){
				var compNovo = "";
				var divCopy = $('#targetGrupo tr');
				for (var a = 1; divCopy.length > a; a++){
					compNovo += $('#targetGrupo tr')[a].children[0].innerHTML+",";
				}
				document.getElementById("componentes").value = compNovo;
				document.getElementById("grupoInfo").value = document.getElementById("selectGrupo").value;
				var filtro = new Object();
				var dataset = new Object();
				filtro["colleagueName"] = document.getElementById("responsavelGrupo").value;
				dataset = DatasetFactory.getDatasetValues("colleague", filtro);
				document.getElementById("codGestor").value = dataset[0]["colleaguePK.colleagueId"];
		    }
		}
	}
	if (atividade == 14){
		var aprovado = document.getElementById('aprovacaoSolicitacao').value;
		var comentGestor = document.getElementById('comentGestor').value;
		var confirma = document.getElementById('confirma').value;

		if ((aprovado == 'Não') && (comentGestor != "") && (confirma == "")){
			ev.stopImmediatePropagation();
	    	ev.stopPropagation();
	   		ev.preventDefault();
	    	return true;

			FLUIGC.message.confirm({
			    message: 'Encerrar solicitação?',
			    title: 'Finalizar:',
			    labelYes: 'Sim',
			    labelNo: 'Não'
			}, function(result, el, ev){
				 if (!result){
					 document.getElementById('confirma').value = 'true';
					 window.parent.$("[data-send]").click();
				 }
				 if (result){
					 document.getElementById('confirma').value = 'false';
				 }
			});
		}
	}
	if (atividade == 15){
		var liberado = document.getElementById("liberado").value;
		if ((liberado == "Sim") && (tipo == "altera")){
			var nomeGrupo = document.getElementById("selectGrupo").value;
			var dataset = DatasetFactory.getDataset("ds_FormGrupoEmail");
			var resultado = "";

			for (var i = 0; i < dataset.values.length; i++){
		    	if (dataset.values[i]["nomeGrupo"] == nomeGrupo){ 
		    		resultado = dataset.values[i]["documentid"];
		    	}
		    }
			document.getElementById("resultado").value = resultado;
		}
	}
});
