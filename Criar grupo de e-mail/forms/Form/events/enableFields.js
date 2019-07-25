function enableFields(form)
{
	var atividade = getValue('WKNumState');

	if (atividade != 12){
		form.setEnabled('nomeGrupo', false);
		form.setEnabled('responsavelGrupo', false);
    	form.setEnabled('mailResp', false);
    	form.setEnabled('setorResp', false);
    	form.setEnabled('targetGrupo', false);
	}
}
