function afterTaskComplete(colleagueId,nextSequenceId,userList)
{
	var atividade = getValue('WKNumState');
	var liberado = hAPI.getCardValue('revogado');
	var numeroDaSolicitacao = getValue("WKNumProces");
	var usuario = getValue('WKUser');
	var nomeSolicitante = hAPI.getCardValue('nomeSolicitante');
	
	if (atividade == 15)
	{
		if (liberado == 'Sim')
		{
			var mensagem = "Acesso do colaborador "+nomeSolicitante+" revogado.";
		}
		else
		{
			var mensagem = "Solicitação finalizada sem alteração do acesso.";
		}
		hAPI.setTaskComments(usuario, numeroDaSolicitacao, 0, mensagem);
	}		
}