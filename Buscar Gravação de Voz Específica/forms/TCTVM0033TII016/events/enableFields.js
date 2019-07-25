function enableFields(form) 
{		
	var atividade = getValue('WKNumState');
	if (atividade == 15 || atividade == 16) 
	{
		form.setEnabled('funcionario', false);
		form.setEnabled('ramal', false);
		form.setEnabled('dataHoraInicio', false);
		form.setEnabled('dataHoraTermino', false);
	}
}