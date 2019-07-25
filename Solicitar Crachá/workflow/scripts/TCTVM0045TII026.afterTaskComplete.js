function afterTaskComplete(colleagueId,nextSequenceId,userList)
{
	var atividade = getValue('WKNumState');
	var liberado = hAPI.getCardValue('liberado');
	var aprovacao = hAPI.getCardValue('aprovacao');
	var numeroDaSolicitacao = getValue('WKNumProces');
	var usuario = getValue('WKUser');
	var nomeColaborador = hAPI.getCardValue('nomeColab');
	var nrProxAtividade = getValue('WKNextState');
	
	if ((atividade == 5) && (aprovacao == 'false'))
	{	
		var mensagem = "Solicitação não aprovada pelo gestor.";
		hAPI.setTaskComments(usuario, numeroDaSolicitacao,hAPI.getActualThread(1, numeroDaSolicitacao, nrProxAtividade), mensagem);
	}
	if (atividade == 15)
	{
		if (liberado == 'true')
		{
			var mensagem = "Criado novo crachá para o(a) colaborador(a) "+nomeColaborador+".";
		}
		if (liberado == 'false')
		{
			var mensagem = "Solicitação finalizada sem criação de novo crachá.";
		}		
		hAPI.setTaskComments(usuario, numeroDaSolicitacao, 0, mensagem);
	}		
}