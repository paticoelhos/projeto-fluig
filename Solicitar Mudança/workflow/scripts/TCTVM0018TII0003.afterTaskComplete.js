function afterTaskComplete(colleagueId,nextSequenceId,userList){
	log.info('---------INICIO afterTaskComplete---------');
	var atividade = getValue('WKNumState');
	var numeroSolicitacao = getValue('WKNumProces');
	var usuario = getValue('WKUser');
	var mudancaEmProducao = hAPI.getCardValue('mudancaEmProducao');
	var motivoRollback = hAPI.getCardValue('motivoRollback');
	var aprovacaoSolicitacao = hAPI.getCardValue('aprovacaoSolicitacao');
	var observacaoAprovacao = hAPI.getCardValue('observacaoAprovacao');
	var dataExecucao = hAPI.getCardValue('dataExecucao');
	var escopo = hAPI.getCardValue('escopo');

	if ((atividade == 6) || (atividade == 19)){
		if (mudancaEmProducao == 'Sim'){
			if (escopo = 'Desenvolvimento Externo')
				var mensagem = "Solicitação nº "+numeroSolicitacao+" finalizada. Realizado deploy em produção em: "+dataExecucao;
			if (escopo = 'Intervenção de Infraestrutura')
				var mensagem = "Solicitação nº "+numeroSolicitacao+" finalizada. Mudança executada em: "+dataExecucao;

			hAPI.setTaskComments(usuario, numeroSolicitacao, 0, mensagem);
			log.info('---------mudancaEmProducao: '+mudancaEmProducao);
			log.info('---------mensagem: '+mensagem);
		}
		if (mudancaEmProducao == 'Não'){
			var mensagem = "Mudança para solicitação nº "+numeroSolicitacao+"não realizada. "+motivoRollback;

			hAPI.setTaskComments(usuario, numeroSolicitacao, 0, mensagem);
			log.info('---------mudancaEmProducao: '+mudancaEmProducao);
			log.info('---------mensagem: '+mensagem);
		}
	}
	if ((atividade == 2) && (aprovacaoSolicitacao == 'Não')){
		var mensagem = "Solicitação nº "+numeroSolicitacao+" reprovada. "+observacaoAprovacao;
		hAPI.setTaskComments(usuario, numeroSolicitacao, 0, mensagem);
		log.info('---------aprovacaoSolicitacao: '+aprovacaoSolicitacao);
		log.info('---------mensagem: '+mensagem);
	}
	log.info('---------FIM afterTaskComplete---------');
}
