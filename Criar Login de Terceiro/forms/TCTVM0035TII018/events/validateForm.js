function validateForm(form) 
{		
	var atividade = getValue("WKNumState");
	var tipousuario = form.getValue("tipousuario");
	var nomeTerceiro = form.getValue("nomeTerceiro");
	var empresaTerceiro = form.getValue("empresaTerceiro");
	var dataHoraInicio = form.getValue("dataHoraInicio");
	var dataHoraTermino = form.getValue("dataHoraTermino");
	var sistema = form.getValue("sistema");
	var justificativa = form.getValue("justificativa");
	var aprovacaoSolicitacao = form.getValue("aprovacaoSolicitacao");
	var observacaoAprovacao = form.getValue("observacaoAprovacao");
	var liberado = form.getValue("liberado");
	var observacaoLiberacao = form.getValue("observacaoLiberacao");
	var loginTerceiro = form.getValue("loginTerceiro");
	
	if ((atividade == 0) || (atividade == 1))
	{
		if ((tipousuario == "") || (tipousuario == null) || (tipousuario == undefined))
		{
			throw "Preencha o campo Tipo de usuário.";
		}
		if ((nomeTerceiro == "") || (nomeTerceiro == null) || (nomeTerceiro == undefined))
		{
			throw "Preencha o campo Nome do Terceiro.";
		}
		if ((empresaTerceiro == "") || (empresaTerceiro == null) || (empresaTerceiro == undefined))
		{
			throw "Preencha o campo Nome da Empresa do Terceiro.";
		}
		if ((dataHoraInicio == "") || (dataHoraInicio == null) || (dataHoraInicio == undefined))
		{
			throw "Preencha o campo Início da Validade do Acesso.";
		}
		if ((dataHoraTermino == "") || (dataHoraTermino == null) || (dataHoraTermino == undefined))
		{
			throw "Preencha o campo Término da Validade do Acesso.";
		}
		if ((sistema == "") || (sistema == null) || (sistema == undefined))
		{
			throw "Preencha o campo Sistema associado.";
		}
		if ((justificativa == "") || (justificativa == null) || (justificativa == undefined))
		{
			throw "Preencha o campo Justificativa.";
		}
	}
	if ((atividade == 23) && (aprovacaoSolicitacao == 'Não') && ((observacaoAprovacao == "") || (observacaoAprovacao == null) || (observacaoAprovacao == undefined)))
	{
		throw "Preencha o campo Observação.";
	}
	if (atividade == 24) 
	{
		if ((liberado != 'Não') && (liberado != 'Sim'))
		{
			throw "Informe se o acesso foi liberado.";
		}
		if ((liberado == 'Não') && ((observacaoLiberacao == "") || (observacaoLiberacao == null) || (observacaoLiberacao == undefined)))
		{
			throw "Preencha o campo Observação.";
		}
		if ((liberado == 'Sim') && ((loginTerceiro == "") || (loginTerceiro == null) || (loginTerceiro == undefined)))
		{
			throw "Informe o Login Criado.";
		}
	}
}