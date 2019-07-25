function afterTaskComplete(colleagueId,nextSequenceId,userList)
{
	log.info('---------INICIO afterTaskComplete---------');	
	var atividade = getValue('WKNumState');
	var numeroSolicitacao = getValue('WKNumProces');
	var usuario = getValue('WKUser');
	var atualidado = hAPI.getCardValue('atualidado');	
	var observacaoAtualizacao = hAPI.getCardValue('observacaoAtualizacao');
	
	if ((atividade == 2) && (atualidado == "Não"))
	{
		var mensagem = "Solicitação nº "+numeroSolicitacao+" finalizada. Lista restritiva não atualizada. "+observacaoAtualizacao;

		hAPI.setTaskComments(usuario, numeroSolicitacao, 0, mensagem);
		log.info('---------atualidado: '+atualidado);	
		log.info('---------observacaoAtualizacao: '+observacaoAtualizacao);
	}
	log.info('---------FIM afterTaskComplete---------');	
}