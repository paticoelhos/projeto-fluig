function validateForm(form) 
{		
	var atividade = getValue("WKNumState");
	var ramais = form.getValue("ramais");
	var justificativa = form.getValue("justificativa");
	var aprovacaoSolicitacao = form.getValue("aprovacaoSolicitacao");
	var observacaoAprovacao = form.getValue("observacaoAprovacao");
	var liberado = form.getValue("liberado");
	var observacaoLiberacao = form.getValue("observacaoLiberacao");
	
	if ((atividade == 0) || (atividade == 2))
	{
		if ((ramais == "") || (ramais == null) || (ramais == undefined))
		{
			throw "Preencha o campo Ramais a monitorar.";
		}
		if ((justificativa == "") || (justificativa == null) || (justificativa == undefined))
		{
			throw "Preencha o campo Justificativa.";
		}
	}
	if ((atividade == 15) && (aprovacaoSolicitacao == 'Não') && ((observacaoAprovacao == "") || (observacaoAprovacao == null) || (observacaoAprovacao == undefined)))
	{
		throw "Preencha o campo Observação.";
	}
	if ((atividade == 16) && (liberado == 'Não') && ((observacaoLiberacao == "") || (observacaoLiberacao == null) || (observacaoLiberacao == undefined)))
	{
		throw "Preencha o campo Observação.";
	}
}