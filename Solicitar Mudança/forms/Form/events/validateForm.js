function validateForm(form){
	log.info('---------INICIO validateForm---------');
	var atividade = getValue("WKNumState");
	var ambiente = form.getValue("ambiente");
	var escopo = form.getValue("escopo");
	var tipoMudanca = form.getValue("tipoMudanca");
	var contatosMudanca = form.getValue("contatosMudanca");
	var descricaoMudanca = form.getValue("descricaoMudanca");
	var justificativaMudanca = form.getValue("justificativaMudanca");
	var beneficiosMudanca = form.getValue("beneficiosMudanca");
	var naoMudanca = form.getValue("naoMudanca");
	var planoRollback = form.getValue("planoRollback");
	var aprovacaoSolicitacao = form.getValue("aprovacaoSolicitacao");
	var observacaoAprovacao = form.getValue("observacaoAprovacao");
	var mudancaEmProducao = form.getValue("mudancaEmProducao");
	var motivoRollback = form.getValue("motivoRollback");
	var dataExecucao = form.getValue("dataExecucao");
	var acaoSolicitacao = form.getValue("acaoSolicitacao");
	var mensagem = null;

	if ((atividade == 0) || (atividade == 1)){
		mensagem = "";
		if ((ambiente == "") || (ambiente == null) || (ambiente == undefined))
			mensagem += "Ambiente\n";
		if ((escopo == "") || (escopo == null) || (escopo == undefined))
			mensagem += "Escopo\n";
		if ((tipoMudanca == "") || (tipoMudanca == null) || (tipoMudanca == undefined))
			mensagem += "Tipo de Mudança\n";
		if ((descricaoMudanca == "") || (descricaoMudanca == null) || (descricaoMudanca == undefined))
			mensagem += "Descrição da Mudança\n";
		if ((justificativaMudanca == "") || (justificativaMudanca == null) || (justificativaMudanca == undefined))
			mensagem += "Justificativa\n";
		if ((beneficiosMudanca == "") || (beneficiosMudanca == null) || (beneficiosMudanca == undefined))
			mensagem += "Impactos e/ou benefícios esperados\n";
		if ((naoMudanca == "") || (naoMudanca == null) || (naoMudanca == undefined))
			mensagem += "Impactos e alternativas identificadas em caso de não implementação da mudança\n";
		if ((planoRollback == "") || (planoRollback == null) || (planoRollback == undefined))
			mensagem += "Plano de Rollback\n";
		if ((contatosMudanca == "") || (contatosMudanca == null) || (contatosMudanca == undefined))
			mensagem += "Contatos\n";
		if (mensagem != "")
			throw "<b>Atenção!</b>\n Verifique os seguintes campos antes de encaminhar a solicitação:\n\n"+mensagem+"\n";
		log.info('---------atividade'+atividade);
	}
	if (atividade == 2){
		if ((aprovacaoSolicitacao != "Não") && (aprovacaoSolicitacao != "Sim"))
			throw "Informe sobre a aprovação da solicitação.";
		if ((aprovacaoSolicitacao == "Não") && ((observacaoAprovacao == "") || (observacaoAprovacao == null) || (observacaoAprovacao == undefined)))
			throw "Preencha o campo Observação.";

		log.info('---------atividade'+atividade);
	}
	if ((atividade == 6) || (atividade == 19)){
		if ((mudancaEmProducao == "Não") && ((motivoRollback == "") || (motivoRollback == null) || (motivoRollback == undefined)) && ((acaoSolicitacao != "") || (acaoSolicitacao == null) || (acaoSolicitacao == undefined) || (acaoSolicitacao == "finaliza")))
			throw "Preencha o campo Motivo do Rollback.";
		if ((mudancaEmProducao == "Sim") && ((dataExecucao == "") || (dataExecucao == null) || (dataExecucao == undefined)))
			throw "Preencha o campo Data de Execução da Mudança.";

		log.info('---------atividade'+atividade);
	}
	log.info('---------FIM validateForm---------');
}
