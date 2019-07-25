function validateForm(form)
{
	var atividade = getValue('WKNumState');
	
	if ((atividade == 0) || (atividade == 4))
	{
		var justificativa = form.getValue('txJustificativa');
		var gestor = form.getValue('gestor');
		
		if ((justificativa == null) || (justificativa ==  "") || (justificativa == undefined))
			throw "Preencha o campo Justificativa.";
		if ((gestor == null) || (gestor ==  "") || (gestor == undefined))
			throw "Gestor não informado.";
	}
	if (atividade == 25)
	{
		var aprovacaoSolicitacao = form.getValue('aprovacaoSolicitacao');
		var observacaoAprovacao = form.getValue('observacaoAprovacao');
		
		if ((aprovacaoSolicitacao == 'Não') && ((observacaoAprovacao == null) || (observacaoAprovacao ==  "") || (observacaoAprovacao == undefined)))
			throw "Preencha o campo Observação.";

	}
	if (atividade == 26)
	{
		var liberado = form.getValue('liberado');
		var observacaoLiberacao = form.getValue('observacaoLiberacao');
		
		if ((liberado != 'Não') && (liberado != 'Sim'))
			throw "Informe se o acesso foi liberado.";		
		if ((liberado == 'Não') && ((observacaoLiberacao == null) || (observacaoLiberacao ==  "") || (observacaoLiberacao == undefined)))
			throw "Preencha o campo Observação.";
	}
}