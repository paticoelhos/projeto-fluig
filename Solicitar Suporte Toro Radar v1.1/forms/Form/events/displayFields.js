function displayFields(form, customHTML){
	var atividade = getValue('WKNumState');

	form.setShowDisabledFields(true);

	customHTML.append("<script>function getWKNumState(){ return " + getValue("WKNumState") + "; }</script>");
	customHTML.append("<script>function getTodayDate(){ return " + new java.util.Date().getTime() + "; }</script>");
	customHTML.append("<script>function getFormMode(){ return '" + form.getFormMode() + "'; }</script>");
	customHTML.append("<script>function getUser(){ return '" + getValue("WKUser") + "'; }</script>");
	customHTML.append("<script>function getCompany(){ return " + getValue("WKCompany") + "; }</script>");

	form.setValue("proximoPasso","");

	function categorizaSolicitacao(){
		customHTML.append('<script>$("#previsaoAtendimento").show();</script>');
		customHTML.append('<script>$("#divPrioridade").show();</script>');
	}
	function naoMovimentaSolicitacao(){
		customHTML.append('<script>$("#navMovimentaSolicitacao").hide();</script>');
	}
	function naoAvaliaSolicitacao(){
		customHTML.append('<script>$("#painelAvaliacao").hide();</script>');
	}
	function filaSuporte(){
		customHTML.append('<script>$("#suporte").hide();</script>');
	}
	function filaDesenvolvimento(){
		customHTML.append('<script>$("#desenvolvimento").hide();</script>');
	}

	if (atividade == 1 || atividade == 0){
		var today = new Date();
		var todayd = today.getDate();
		var todaym = today.getMonth() + 1;
		var todayy = today.getFullYear();
		var DataAtual = todayd + "/" + todaym + "/" + todayy;
		form.setValue('dataAbertura', DataAtual);

		customHTML.append('<script>$("#divCategoria").hide();</script>');
		customHTML.append('<script>$("#analises").hide();</script>');
		naoAvaliaSolicitacao();
		naoMovimentaSolicitacao();
	}
	if (atividade == 65){
		filaDesenvolvimento();
		naoAvaliaSolicitacao();
		categorizaSolicitacao();
	}
	if (atividade == 68){
		naoMovimentaSolicitacao();
		categorizaSolicitacao();
	}
	if (atividade == 67){
		naoMovimentaSolicitacao();
		naoAvaliaSolicitacao();
		categorizaSolicitacao();
	}
	if (atividade == 63 || atividade == 66){
		filaSuporte();
		naoAvaliaSolicitacao();
		categorizaSolicitacao();
	}
}
