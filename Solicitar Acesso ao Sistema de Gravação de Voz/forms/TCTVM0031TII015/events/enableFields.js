function enableFields(form) 
{		
	var atividade = getValue('WKNumState');
	if (atividade == 15 || atividade == 16) 
	{
		form.setEnabled('ramais', false);
		form.setEnabled('justificativa', false);
	}
}