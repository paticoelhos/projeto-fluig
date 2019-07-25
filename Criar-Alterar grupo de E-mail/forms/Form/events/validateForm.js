function validateForm(form)
{
	var atividade = getValue('WKNumState');
	var tipo = form.getValue('tipo');
	var nomeNovoGrupo = form.getValue('nomeNovoGrupo');
	var responsavelNovoGrupo = form.getValue('responsavelNovoGrupo');
	var txJustificativa = form.getValue('txJustificativa');
	var componentes = form.getValue('componentes');	
	var aprovacaoSolicitacao = form.getValue('aprovacaoSolicitacao');
	var observacaoAprovacao = form.getValue('observacaoAprovacao');
	var confirma = form.getValue('confirma');
	var liberado = form.getValue('liberado');
	var observacaoLiberacao = form.getValue('observacaoLiberacao');
	
	if (atividade == 0 || atividade == 8)
	{
		if (tipo == "novo")
		{
			if ((responsavelNovoGrupo == "") || (responsavelNovoGrupo == undefined) || (responsavelNovoGrupo == null))
				throw "Escolha um responsável pelo novo grupo.";
		    if ((nomeNovoGrupo == "") || (nomeNovoGrupo == undefined) || (nomeNovoGrupo == null))
		    	throw "Escolha um nome para o novo grupo.";
		    if ((componentes == "") || (componentes == undefined) || (componentes == null))
		    	throw "Escolha os componentes para o novo grupo.";
		}
		if ((txJustificativa == "") || (txJustificativa == undefined) || (txJustificativa == null))
			throw "Preencha o campo Justificativa.";
		if (tipo == "nenhum")
			throw "Selecione uma das opções: Criar novo grupo ou Alterar componentes.";
	}
	if (atividade == 14)
	{
		if ((aprovacaoSolicitacao != 'Não') && (aprovacaoSolicitacao != 'Sim'))
			throw "Informe se a solicitação foi aprovada.";
		if ((aprovacaoSolicitacao == "Não")  && ((observacaoAprovacao == "") || (observacaoAprovacao == undefined) || (observacaoAprovacao == null)))
			throw "Preencha o campo Observação.";
	}
	if (atividade == 15)
	{
		if ((liberado != 'Não') && (liberado != 'Sim'))
			throw "Informe se a solicitação foi liberada.";
		if ((liberado == 'Não') && ((observacaoLiberacao == "") || (observacaoLiberacao == undefined) || (observacaoLiberacao == null)))
			throw "Preencha o campo Observação.";
	}
}