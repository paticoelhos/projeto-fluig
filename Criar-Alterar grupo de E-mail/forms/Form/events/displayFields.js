function displayFields(form,customHTML){
	var atividade = parseInt(getValue("WKNumState"));
	var usuarioLogado = getValue('WKUser');
	form.setShowDisabledFields(true);

	customHTML.append("<script>function getWKNumState(){ return " + getValue("WKNumState") + "; }</script>");
	customHTML.append("<script>function getTodayDate(){ return " + new java.util.Date().getTime() + "; }</script>");
	customHTML.append("<script>function getFormMode(){ return '" + form.getFormMode() + "'; }</script>");
	customHTML.append("<script>function getUser(){ return '" + getValue("WKUser") + "'; }</script>");
	customHTML.append("<script>function getCompany(){ return " + getValue("WKCompany") + "; }</script>");


	if (atividade == 0 || atividade == 8){
		var today = new Date();
		var todayd = today.getDate();
		var todaym = today.getMonth() + 1;
		var todayy = today.getFullYear();
		var DataAtual = todayd + "/" + todaym + "/" + todayy;
		form.setValue('dataAbertura', DataAtual);

	    customHTML.append('<script>$("#accordionLiberacao").hide();</script>');
	    customHTML.append('<script>$("#accordionAprovacao").hide();</script>');
	    customHTML.append('<script>$("#tbComponentes").hide();</script>');
	    customHTML.append('<script>$("#divMailResp").hide();</script>');
	    customHTML.append('<script>$("#divCompGrupo").hide();</script>');
	    customHTML.append('<script>$("#divRespGrupo").hide();</script>');
    	customHTML.append('<script>$("#targetGrupoCopy").hide();</script>');;
    	customHTML.append('<script>$("#tbCompGrupo").hide();</script>');
    	customHTML.append('<script>$("#divGrupoInfo").hide();</script>');
    	customHTML.append('<script>$("#divMailInfo").hide();</script>');
    	customHTML.append('<script>$("#divResponsavelGrupo").hide();</script>');
    	customHTML.append('<script>$("#divRespSetorGrupo").hide();</script>');
    	customHTML.append('<script>$("#divSelecionaGrupo").hide();</script>');
    	customHTML.append('<script>$("#divNovoGrupo").hide();</script>');
    	customHTML.append('<script>$("#incluiComponentes").show();</script>');
	}

	function cDataset(){
		var responsavelNovoGrupo = form.getValue("responsavelNovoGrupo");
	    var filtroResp = new Array();
	    var c1 = DatasetFactory.createConstraint("colleagueName", responsavelNovoGrupo, responsavelNovoGrupo, ConstraintType.MUST);
	    filtroResp[0] = c1;
	    var arrayCamposResp = new Array("colleagueName", "mail", "groupId");
	    var datasetResp = DatasetFactory.getDataset("colleague", arrayCamposResp, filtroResp, null);

	    for(var z = 0; z < datasetResp.rowsCount; z++){
		    var emailResp = datasetResp.getValue(z, "mail");
				var setorResp = datasetResp.getValue(z, "groupId");

		    form.setValue("mailResp", emailResp);
		    form.setValue("setorResp", setorResp);
		}
	}

	if (atividade == 14){

		customHTML.append('<script>$("#txJustificativa").show();</script>');
	    customHTML.append('<script>$("#divSetorResp").show();</script>');
	    customHTML.append('<script>$("#accordionLiberacao").hide();</script>');
	    customHTML.append('<script>$("#opcoes").hide();</script>');

	    if (form.getValue("tipo")== "novo"){
	    	cDataset();
				customHTML.append('<script>$("#divResponsavelNovoGrupo").show();</script>');
				customHTML.append('<script>$("#divZoomRespNovoGrupo").hide();</script>');
				customHTML.append('<script>$("#tbComponentes").show();</script>');
				customHTML.append('<script>$("#tbCompGrupo").hide();</script>');
				customHTML.append('<script>$("#tbGrupoAltera").hide();</script>');
				customHTML.append('<script>$("#incluiComponentes").hide();</script>');
				customHTML.append('<script>$("#responsavelNovoGrupo").prop("disabled", true);</script>');
	    	customHTML.append('<script>$("#divComponente").hide();</script>');
	    	customHTML.append('<script>$("#divGrupoInfo").hide();</script>');
	    	customHTML.append('<script>$("#divMailInfo").hide();</script>');
	    	customHTML.append('<script>$("#divResponsavelGrupo").hide();</script>');
	    	customHTML.append('<script>$("#divRespSetorGrupo").hide();</script>');
		}
	    if (form.getValue("tipo")== "altera"){
	    	customHTML.append('<script>$("#divSelecionaGrupo").show();</script>');
	    	customHTML.append('<script>$("#divNovoGrupo").hide();</script>');
	    	customHTML.append('<script>$("#tbCompGrupo").show();</script>');
	    	customHTML.append('<script>$("#divResponsavelGrupo").show();</script>');
	    	customHTML.append('<script>$("#actionsCompGrupo").hide();</script>');
	    	customHTML.append('<script>$("#divCompGrupo").hide();</script>');
	    	customHTML.append('<script>$("#divRespGrupo").hide();</script>');
	    	customHTML.append('<script>$("#targetGrupoCopy tr td input").prop("disabled", true);</script>');
	    	customHTML.append('<script>$("#targetGrupoCopy").show();</script>');
	    	customHTML.append('<script>$("#targetGrupo").hide();</script>');
	    	customHTML.append('<script>$("#divComponente").show();</script>');
	    	customHTML.append('<script>$("#divGrupoInfo").show();</script>');
	    	customHTML.append('<script>$("#divMailInfo").show();</script>');
	    	customHTML.append('<script>$("#divResponsavelGrupo").show();</script>');
	    	customHTML.append('<script>$("#divRespSetorGrupo").show();</script>');
	    	customHTML.append('<script>$("#divSelecionaGrupo").hide();</script>');
		}
	}
	if (atividade == 15){
		customHTML.append('<script>$("#accordionAprovacao").hide();</script>');
		customHTML.append('<script>$("#txJustificativa").show();</script>');
    customHTML.append('<script>$("#divAprova").hide();</script>');
  	customHTML.append('<script>$("#divGrupoInfo").show();</script>');
  	customHTML.append('<script>$("#divMailInfo").show();</script>');
    customHTML.append('<script>$("#opcoes").hide();</script>');

	    if (form.getValue("tipo")== "novo"){
	    	cDataset();
				customHTML.append('<script>$("#divResponsavelNovoGrupo").show();</script>');
				customHTML.append('<script>$("#divZoomRespNovoGrupo").hide();</script>');
				customHTML.append('<script>$("#tbComponentes").show();</script>');
				customHTML.append('<script>$("#tbCompGrupo").hide();</script>');
				customHTML.append('<script>$("#tbGrupoAltera").hide();</script>');
				customHTML.append('<script>$("#incluiComponentes").hide();</script>');
				customHTML.append('<script>$("#responsavelNovoGrupo").prop("disabled", true);</script>');
	    	customHTML.append('<script>$("#divComponente").hide();</script>');
	    	customHTML.append('<script>$("#divGrupoInfo").hide();</script>');
	    	customHTML.append('<script>$("#divMailInfo").hide();</script>');
	    	customHTML.append('<script>$("#divResponsavelGrupo").hide();</script>');
	    	customHTML.append('<script>$("#divRespSetorGrupo").hide();</script>');
		}
	    if (form.getValue("tipo")== "altera"){
	    	customHTML.append('<script>$("#divSelecionaGrupo").hide();</script>');
				customHTML.append('<script>$("#divNovoGrupo").hide();</script>');
	    	customHTML.append('<script>$("#tbCompGrupo").show();</script>');
	    	customHTML.append('<script>$("#divResponsavelGrupo").show();</script>');
	    	customHTML.append('<script>$("#actionsCompGrupo").hide();</script>');
	    	customHTML.append('<script>$("#divCompGrupo").hide();</script>');
	    	customHTML.append('<script>$("#divRespGrupo").hide();</script>');
	    	customHTML.append('<script>$("#targetGrupoCopy").show();</script>');
	    	customHTML.append('<script>$("#targetGrupo").hide();</script>');
	    	customHTML.append('<script>$("#divComponente").show();</script>');
	    	customHTML.append('<script>$("#divGrupoInfo").show();</script>');
	    	customHTML.append('<script>$("#divMailInfo").show();</script>');
	    	customHTML.append('<script>$("#divResponsavelGrupo").show();</script>');
	    	customHTML.append('<script>$("#divRespSetorGrupo").show();</script>');
	    	customHTML.append('<script>$("#divSelecionaGrupo").hide();</script>');
		}
	}
}
