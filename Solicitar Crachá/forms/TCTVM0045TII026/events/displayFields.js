function displayFields(form,customHTML)
{	
	var atividade = parseInt(getValue("WKNumState"));
	var usuarioLogado = getValue('WKUser');
	form.setShowDisabledFields(true);
	
	customHTML.append("<script>function getWKNumState(){ return " + getValue("WKNumState") + "; }</script>");
	customHTML.append("<script>function getTodayDate(){ return " + new java.util.Date().getTime() + "; }</script>");
	customHTML.append("<script>function getFormMode(){ return '" + form.getFormMode() + "'; }</script>");
	customHTML.append("<script>function getUser(){ return '" + getValue("WKUser") + "'; }</script>");
	customHTML.append("<script>function getCompany(){ return " + getValue("WKCompany") + "; }</script>");
	
	if (atividade == 0 || atividade == 4) 
	{
		var today = new Date();
		var todayd = today.getDate();
		var todaym = today.getMonth() + 1;
		var todayy = today.getFullYear();
		var DataAtual = todayd + "/" + todaym + "/" + todayy;
		form.setValue('dataAbertura', DataAtual);
		
		customHTML.append('<script>$("#accordionAprovacao").hide();</script>');
		customHTML.append('<script>$("#accordionLiberacao").hide();</script>');
	}
	if (atividade == 25) 
	{
		customHTML.append('<script>$("#accordionLiberacao").hide();</script>');
	}
	if (atividade == 26) 
	{
		customHTML.append('<script>$("#accordionAprovacao").hide();</script>');
	}
}	