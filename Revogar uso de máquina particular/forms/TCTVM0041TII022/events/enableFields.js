function enableFields(form) 
{		
	var atividade = getValue('WKNumState');
	
	if (atividade == 15)
	{
		form.setEnabled('inicioValidade', false);
		form.setEnabled('terminoValidade', false);
	}
}