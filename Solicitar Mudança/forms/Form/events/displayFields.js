function displayFields(form, customHTML){
	log.info('---------INICIO displayFields---------');
	form.setShowDisabledFields(true);
	customHTML.append("<script>function getWKNumState(){ return " + getValue("WKNumState") + "; }</script>");
	customHTML.append("<script>function getTodayDate(){ return " + new java.util.Date().getTime() + "; }</script>");
	customHTML.append("<script>function getFormMode(){ return '" + form.getFormMode() + "'; }</script>");
	customHTML.append("<script>function getUser(){ return '" + getValue("WKUser") + "'; }</script>");
	customHTML.append("<script>function getCompany(){ return " + getValue("WKCompany") + "; }</script>");

	var atividade = parseInt(getValue("WKNumState"));
	if(atividade == 0 || atividade == 1){
		var today = new Date();
		var todayd = today.getDate();
		var todaym = today.getMonth() + 1;
		var todayy = today.getFullYear();
		var DataAtual = todayd + "/" + todaym + "/" + todayy;
		form.setValue('dataAbertura', DataAtual);

		customHTML.append('<script>$("#accordionAprovacao").hide();</script>');
		customHTML.append('<script>$("#accordionDeploy").hide();</script>');
	}
	if (atividade == 2) 
		customHTML.append('<script>$("#accordionDeploy").hide();</script>');
	if ((atividade == 6) || (atividade == 19))
		customHTML.append('<script>$("#accordionAprovacao").hide();</script>');

	if (atividade == 22)
		customHTML.append('<script>$("#accordionAprovacao").hide();</script>');

	log.info('---------FIM displayFields---------');
}
