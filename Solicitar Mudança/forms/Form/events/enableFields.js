function enableFields(form){
	var atividade = getValue('WKNumState');
	if ((atividade == 2) || (atividade == 6) || (atividade == 19)){
		form.setEnabled('ambiente', false);
		form.setEnabled('escopo', false);
		form.setEnabled('tipoMudanca', false);
		form.setEnabled('contatosMudanca', false);
		form.setEnabled('descricaoMudanca', false);
		form.setEnabled('justificativaMudanca', false);
		form.setEnabled('beneficiosMudanca', false);
		form.setEnabled('naoMudanca', false);
		form.setEnabled('planoRollback', false);
	}
	if (atividade == 22){
		form.setEnabled('mudancaEmProducao', false);
		form.setEnabled('motivoRollback', false);
	}
}
