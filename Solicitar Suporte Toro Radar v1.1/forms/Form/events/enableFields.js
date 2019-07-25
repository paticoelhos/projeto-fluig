function enableFields(form){
	var atividade = getValue('WKNumState');

	if (atividade == 63){
		form.setEnabled('desenvolvimento', false);
		form.setEnabled('descricaoSolicitacao', false);
		form.setEnabled('prioridade', false);
		form.setEnabled('analiseDesenvolvimento', false);
		form.setEnabled('suporte', false);
	}
	if (atividade == 66 || atividade == 64){
		form.setEnabled('desenvolvimento', false);
		form.setEnabled('descricaoSolicitacao', false);
		form.setEnabled('prioridade', false);
		form.setEnabled('analiseDesenvolvimento', false);
		form.setEnabled('suporte', false);
		form.setEnabled('dataPrevisao', false);
		form.setEnabled('categoria', false);
	}
	if (atividade == 65){
		form.setEnabled('descricaoSolicitacao', false);
		form.setEnabled('analiseSuporte', false);
		form.setEnabled('prioridade', false);
		form.setVisible('desenvolvimento', false);
		form.setEnabled('categoria', false);
	}
	if (atividade == 68){
		form.setEnabled('descricaoSolicitacao', false);
		form.setEnabled('analiseSuporte', false);
		form.setEnabled('analiseDesenvolvimento', false);
		form.setEnabled('categoria', false);
		form.setEnabled('prioridade', false);
		form.setEnabled('dataPrevisao', false);
	}
	if (atividade == 67){
		form.setEnabled('categoria', false);
		form.setEnabled('prioridade', false);
		form.setEnabled('dataPrevisao', false);
		form.setEnabled('analiseDesenvolvimento', false);
		form.setEnabled('analiseSuporte', false);
	}
}
