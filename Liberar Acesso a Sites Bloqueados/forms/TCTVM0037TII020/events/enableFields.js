function enableFields(form) 
{		
	var atividade = getValue('WKNumState');
	if (atividade == 6 || atividade == 9) 
	{
		form.setEnabled('siteAcesso', false);
		form.setEnabled('justificativa', false);
	}
}