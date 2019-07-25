var atividade;
$(document).ready(function(){
	var tbGrupo = FLUIGC.datatable('#tbGrupo', {
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

	atividade = parent.ECM.workflowView.sequence;
	if ((atividade == 0) || (atividade == 1)){
		var resultado = document.getElementById("resultado").value;
		if (resultado == ""){
			FLUIGC.message.error({
			    title: 'Erro!',
			    message: 'Este é um subprocesso de Criar/Alterar Grupo de E-mail e não pode ser iniciado.',
			    details: 'Para solicitar a criação de um grupo de e-mail, favor abrir uma solicitação "Criar/Alterar Grupo de E-mail" em Processos/Inicializar Solicitações/Tecnologia da Informação.'
			}, function(el, ev){
			});
		}
	}

	if (document.getElementById('componentes').value == "" || document.getElementById('componentes').value == undefined || document.getElementById('componentes').value == null)
	var componentes = document.getElementById('componentes').innerHTML;
	else var componentes = document.getElementById('componentes').value;

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
    	tbGrupo.addRow(null, row);
	}
});
