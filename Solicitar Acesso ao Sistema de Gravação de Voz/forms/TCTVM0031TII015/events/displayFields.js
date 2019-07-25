function displayFields(form, customHTML) 
{		
	form.setShowDisabledFields(true);
	customHTML.append("<script>function getWKNumState(){ return " + getValue("WKNumState") + "; }</script>");
	customHTML.append("<script>function getTodayDate(){ return " + new java.util.Date().getTime() + "; }</script>");
	customHTML.append("<script>function getFormMode(){ return '" + form.getFormMode() + "'; }</script>");
	customHTML.append("<script>function getUser(){ return '" + getValue("WKUser") + "'; }</script>");
	customHTML.append("<script>function getCompany(){ return " + getValue("WKCompany") + "; }</script>");
	
	var atividade = parseInt(getValue("WKNumState"));
	if(atividade == 0 || atividade == 2)
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
	if (atividade == 15)
	{
		customHTML.append('<script>$("#accordionLiberacao").hide();</script>');
	}
	if (atividade == 16)
	{
		customHTML.append('<script>$("#accordionAprovacao").hide();</script>');	
	}
}