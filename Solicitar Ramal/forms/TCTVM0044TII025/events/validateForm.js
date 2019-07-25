function validateForm(form)
{
	var atividade = getValue('WKNumState');
	
	if ((atividade == 0) || (atividade == 1))
	{
		var responsavelRamal = form.getValue('responsavelRamal');
		var justificativa = form.getValue('justificativa');
		var gestor = form.getValue('gestor');
		
		if ((gestor == null) || (gestor ==  "") || (gestor == undefined))
		{
			throw "É necessário atribuir um gestor para aprovação desta solicitação.";
		}
		if ((responsavelRamal == "") || (responsavelRamal == null) || (responsavelRamal == undefined))
		{
			throw "É necessário atribuir um responsável para o novo ramal.";
		}
		if ((justificativa == null) || (justificativa ==  "") || (justificativa == undefined))
		{
			throw "Preencha o campo Justificativa.";
		}
	}
	if (atividade == 16)
	{
		var aprovacaoSolicitacao = form.getValue('aprovacaoSolicitacao');
		var observacaoAprovacao = form.getValue('observacaoAprovacao');
		
		if ((aprovacaoSolicitacao == 'Não') && ((observacaoAprovacao == null) || (observacaoAprovacao ==  "") || (observacaoAprovacao == undefined)))
		{
			throw "Preencha o campo Observação.";
		}

	}
	if (atividade == 17)
	{
		var liberado = form.getValue('liberado');
		var observacaoLiberacao = form.getValue('observacaoLiberacao');
		var novoRamal = form.getValue('novoRamal');
		if ((liberado == 'Não') && ((observacaoLiberacao == null) || (observacaoLiberacao ==  "") || (observacaoLiberacao == undefined)))
		{
			throw "Preencha o campo Observação.";
		}
		if ((liberado != 'Não') && (liberado != 'Sim'))
		{
			throw "Informe se o acesso foi liberado.";
		}
		if ((liberado == 'Sim') && ((novoRamal == null) || (novoRamal ==  "") || (novoRamal == undefined)))
		{
			throw "Informe o novo ramal do colaborador.";
		}
	}
}