function enableFields(form)
{
	var atividade = getValue('WKNumState');

	if ((atividade == 25) || (atividade == 26))
	{
		form.setEnabled('txJustificativa', false);
		form.setEnabled('gestor', false);
	}
}