function enableFields(form) 
{		
	var atividade = getValue('WKNumState');
	if (atividade == 41 || atividade == 42) 
	{
		form.setEnabled('inicioValidade', false);
		form.setEnabled('terminoValidade', false);
	}
}