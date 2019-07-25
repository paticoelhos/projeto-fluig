function afterTaskComplete(colleagueId,nextSequenceId,userList)
{
	var atividade = getValue('WKNumState');
	var liberado = hAPI.getCardValue('liberado');
	var aprovacao = hAPI.getCardValue('aprovacaoSolicitacao');
	var numeroDaSolicitacao = getValue('WKNumProces');
	var usuario = getValue('WKUser');
	var nomeColaborador = hAPI.getCardValue('responsavelRamal');
	var novoRamal = hAPI.getCardValue('novoRamal');
	
	if ((atividade == 16) && (aprovacao == 'Não'))
	{	
		var mensagem = "Solicitação negada pelo gestor.";
		hAPI.setTaskComments(usuario, numeroDaSolicitacao, 0, mensagem);
	}
	if (atividade == 17)
	{
		if (liberado == 'Sim')
		{
			var mensagem = "Criado novo ramal "+novoRamal+" para o(a) colaborador(a) "+nomeColaborador+".";
		}
		if (liberado == 'Não')
		{
			var mensagem = "Solicitação finalizada sem criação de ramal.";
		}		
		hAPI.setTaskComments(usuario, numeroDaSolicitacao, 0, mensagem);
	}		
}