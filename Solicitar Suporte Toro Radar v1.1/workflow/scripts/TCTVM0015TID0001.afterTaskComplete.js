function afterTaskComplete(colleagueId,nextSequenceId,userList)
{
	log.info('---------afterTaskComplete---------');
	var atividade = getValue('WKNumState');
	var numeroSolicitacao = getValue('WKNumProces');
	var usuario = getValue('WKUser');
	var comentario = hAPI.getCardValue('comentario');
	var proximoPasso = hAPI.getCardValue('proximoPasso');
	var descricaoSolicitacao = hAPI.getCardValue('descricaoSolicitacao');
	var analiseSuporte = hAPI.getCardValue('analiseSuporte');
	var analiseDesenvolvimento = hAPI.getCardValue('analiseDesenvolvimento');
	
	if ((atividade == 0) || (atividade == 1))
	{
		var mensagem = descricaoSolicitacao;	
		hAPI.setTaskComments(usuario, numeroSolicitacao, 0, mensagem);
		log.info('---------Atividade: '+atividade);
		log.info('---------Mensagem: '+mensagem);
	}	
	if ((atividade == 68) && (proximoPasso == 'false') && (comentario != "" || comentario != null || comentario != undefined))
		hAPI.setTaskComments(usuario, numeroSolicitacao, 0, comentario);
}