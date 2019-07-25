function validateForm(form) 
{		
	var atividade = getValue("WKNumState");
	var revogado = form.getValue("revogado");

	if ((atividade == 15) && ((revogado != 'Não') && (revogado != 'Sim')))
	{
		throw "Informe se o acesso foi revogado.";
	}
}