function enableFields(form) 
{		
	var atividade = getValue('WKNumState');
	if (atividade == 23 || atividade == 24) 
	{
		form.setEnabled('tipousuario', false);
		form.setEnabled('nomeTerceiro', false);
		form.setEnabled('empresaTerceiro', false);
		form.setEnabled('sistema', false);
		form.setEnabled('dataHoraInicio', false);
		form.setEnabled('dataHoraTermino', false);
		form.setEnabled('justificativa', false);
	}
}