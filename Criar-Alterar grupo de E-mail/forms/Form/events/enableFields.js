function enableFields(form){
	var atividade = getValue('WKNumState');

	if (atividade == 14){
		form.setEnabled('nomeNovoGrupo', false);
    	form.setEnabled('txJustificativa', false);
    	form.setEnabled('grupoInfo', false);
    	form.setEnabled('responsavelGrupo', false);
    	form.setEnabled('mailInfo', false);
    	form.setEnabled('respSetorGrupo', false);
	}
	if (atividade == 15){
		if (form.getValue('tipo') == 'novo'){
			form.setEnabled('nomeNovoGrupo', false);
			form.setEnabled('responsavelNovoGrupo', false);
			form.setEnabled('mailResp', false);
			form.setEnabled('setorResp', false);
		}
		form.setEnabled('txJustificativa', false);
		form.setEnabled('accordionAprovacao', false);
    	form.setEnabled('btAprovado', false);
    	form.setEnabled('comentGestor', false);
	}
}
