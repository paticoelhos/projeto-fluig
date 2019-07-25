var targetGrupo = FLUIGC.datatable('#targetGrupo', {
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

function criaGrupo(){
	document.getElementById('tipo').value = "novo";
	$('#divNovoGrupo').show();
	$('#divCompGrupo').hide();
	$('#divRespGrupo').hide();
	$('#divCompTb').show();
	$('#tbCompGrupo').hide();
	$('#actionsCompGrupo').hide();
	$('#divResponsavelGrupo').hide();
	$('#divRespSetorGrupo').hide();
	$('#divSetorResp').hide();
	$('#divSelecionaGrupo').hide();
	$('#divResponsavelNovoGrupo').hide();
	$('#divZoomRespNovoGrupo').show();
	$('#btNovoGrupo').removeClass('btn btn-default').addClass('btn btn-primary');
	$('#btAltComponentes').removeClass('btn btn-primary').addClass('btn btn-default');

	document.getElementById('tipo').value = "novo";
}
function altComp(){
	document.getElementById('tipo').value = "altera";
	$('#btAltComponentes').removeClass('btn btn-default').addClass('btn btn-primary');
	$('#btNovoGrupo').removeClass('btn btn-primary').addClass('btn btn-default');
	$('#divNovoGrupo').hide();
	$('#divSelecionaGrupo').show();
	$('#divCompGrupo').hide();
	$('#divRespGrupo').hide();
	$('#divCompTb').hide();
	$('#tbCompGrupo').show();
	$('#actionsCompGrupo').show();
	$('#divResponsavelGrupo').show();
	$('#divRespSetorGrupo').show();
	$("#targetGrupo").show();

	var opcao = "";
	opcao += "<option selected disabled></option>";
	document.getElementById("altRespGrupo").innerHTML += opcao;
	document.getElementById("compGrupo").innerHTML += opcao;
}
$(document).on('change', "#selectGrupo", function (){
	altGrupo();
});
function altGrupo(){
	var a = 0;
	while (a < targetGrupo.getData().length){
		targetGrupo.removeRow(0);
	}

	var nomeGrupo = document.getElementById('selectGrupo').value;
	var dataset = DatasetFactory.getDataset('ds_FormGrupoEmail');
	var nome;
	var responsavel;
	var email;
	var setor;

	for (var x = 0; x < dataset.values.length; x++){
		if (dataset.values[x]["nomeGrupo"] == nomeGrupo){
			nome = dataset.values[x]["componentes"];
			responsavel = dataset.values[x]["responsavelGrupo"];
			email =  dataset.values[x]["mailResp"];
			setor = dataset.values[x]["setorResp"];
		}
	}

	var nomes = nome.split(",");
	document.getElementById('componentes').value = nomes;
	document.getElementById('responsavelGrupo').value = responsavel;
	document.getElementById('mailInfo').value = email;
	document.getElementById('respSetorGrupo').value = setor;

	var emailDS = new Array();
	var setorDS = new Array();
	var filter = new Object();
	var datasetColleague = new Object();

	for (var i = 0; i < nomes.length; i++){
		filter["colleagueName"] = nomes[i];
		datasetColleague = DatasetFactory.getDatasetValues("colleague", filter);

		//var id = wdkAddChild('tbGrupo');
		//$("#tdNome"+id).val(datasetColleague[0]["colleagueName"]);
		emailDS[i] = datasetColleague[0]["mail"];
		setorDS[i] = datasetColleague[0]["groupId"];
		var row = {nome: nomes[i], email: emailDS[i], setor: setorDS[i]};
    	targetGrupo.addRow(null, row);
	}
}

function adiciona(){
	$('#divCompGrupo').show();
	$('#divRespGrupo').hide();
}
function addCompGrupo(){
	var compGrupo = document.getElementById('compGrupo').value;
	var filter = new Object();
	var datasetColleague = new Object();

	filter["colleagueName"] = compGrupo;
	datasetColleague = DatasetFactory.getDatasetValues("colleague", filter);

	var nome = datasetColleague[0]["colleagueName"];
	var email = datasetColleague[0]["mail"];
	var setor = datasetColleague[0]["groupId"];

	var x = 0;
	for (var a = 0; a < targetGrupo.getData().length; a++){
		if (targetGrupo.getData()[x].nome != nome){
			x[a] = x++;
	    }
	}

	if (x == targetGrupo.getData().length){
		/*var id = wdkAddChild('tbGrupo');
		$("#tdNome"+id).val(nome);
		$("#tdEmail"+id).val(email);
		$("#tdSetor"+id).val(setor);*/
		var row = {nome: nome, email: email, setor: setor};
		targetGrupo.addRow(null, row);
		document.getElementById("compGrupo").value = "";
	}
	else{
	    FLUIGC.toast({
	        title: 'Atenção: ',
	        message: 'Componente já adicionado.',
	        type: 'warning'
	    });
	    document.getElementById("compGrupo").value = "";
	}
}
function remove(){
	$('#divCompGrupo').hide();
	$('#divRespGrupo').hide();
	if (targetGrupo.selectedRows().length != 0)	{
		targetGrupo.removeRow(targetGrupo.selectedRows());
		FLUIGC.toast({
	        title: '',
	        message: 'Componente removido com sucesso.',
	        type: 'success'
	    });
	}
	else{
		FLUIGC.toast({
	        title: '',
	        message: 'Selecione o componente a ser removido na tabela.',
	        type: 'warning'
	    });
	}
}
function fechaAdd(){
	$('#divCompGrupo').hide();
	$('#divRespGrupo').hide();
}
function altGestor(){
	$('#divRespGrupo').show();
	$('#divCompGrupo').hide();
}
function addRespGrupo(){
	var altRespGrupo = document.getElementById('altRespGrupo').value;
	var filter = new Object();
	var datasetColleague = new Object();

	filter["colleagueName"] = altRespGrupo;
	datasetColleague = DatasetFactory.getDatasetValues("colleague", filter);

	document.getElementById("responsavelGrupo").value = datasetColleague[0]["colleagueName"];
	document.getElementById("mailInfo").value = datasetColleague[0]["mail"];
	document.getElementById("respSetorGrupo").value = datasetColleague[0]["groupId"];
	document.getElementById("altRespGrupo").value = "";
}
