function enableFields(form) 
{		
	var atividade = getValue('WKNumState');

	if ((atividade == 16) || (atividade == 17))
	{
		form.setEnabled('responsavelRamal', false);
		form.setEnabled('gestor', false);
		form.setEnabled('justificativa', false);
	}
}