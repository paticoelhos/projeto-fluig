function enableFields(form) 
{		
	var atividade = getValue('WKNumState');
	if (atividade == 23 || atividade == 24) 
	{
		form.setEnabled('tipousuario', false);
		form.setEnabled('usuarionovo', false);
		form.setEnabled('resp1', false);
		form.setEnabled('resp2', false);
		form.setEnabled('sistema', false);
		form.setEnabled('justificativa', false);
	}
}