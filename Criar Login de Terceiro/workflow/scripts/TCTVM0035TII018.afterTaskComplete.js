function afterTaskComplete(colleagueId,nextSequenceId,userList)
{
	log.info('---------INICIO afterTaskComplete---------');	
	var atividade = getValue('WKNumState');
	var numeroSolicitacao = getValue('WKNumProces');
	var usuario = getValue('WKUser');
	var aprovacaoSolicitacao = hAPI.getCardValue('aprovacaoSolicitacao');	
	var observacaoAprovacao = hAPI.getCardValue('observacaoAprovacao');
	var liberado = hAPI.getCardValue('liberado');
	var observacaoLiberacao = hAPI.getCardValue('observacaoLiberacao');
	var loginTerceiro = hAPI.getCardValue('loginTerceiro');
	
	if ((atividade == 23) && (aprovacaoSolicitacao == "Não"))
	{
		var mensagem = "Solicitação nº "+numeroSolicitacao+" não aprovada. "+observacaoAprovacao;

		hAPI.setTaskComments(usuario, numeroSolicitacao, 0, mensagem);
		log.info('---------aprovacaoSolicitacao: '+aprovacaoSolicitacao);	
		log.info('---------observacaoAprovacao: '+observacaoAprovacao);
	}
	if (atividade == 24)
	{
		if (liberado == 'Não')
		{
			var mensagem = "Solicitação nº "+numeroSolicitacao+" finalizada. Acesso não liberado. "+observacaoLiberacao;
			hAPI.setTaskComments(usuario, numeroSolicitacao, 0, mensagem);
			log.info('---------liberado: '+liberado);
			log.info('---------observacaoLiberacao: '+observacaoLiberacao);	
		}
		if ((liberado == 'Sim') && (loginTerceiro != ""))
		{
			var mensagem = "Solicitação nº "+numeroSolicitacao+" finalizada. Criado login "+loginTerceiro;
			hAPI.setTaskComments(usuario, numeroSolicitacao, 0, mensagem);
			log.info('---------liberado: '+liberado);
			log.info('---------observacaoLiberacao: '+observacaoLiberacao);	
		}
	}

	log.info('---------FIM afterTaskComplete---------');	
}