function validateForm(form) 
{		
	var atividade = getValue("WKNumState");
	var tipousuario = form.getValue("tipousuario");
	var usuarionovo = form.getValue("usuarionovo");
	var resp1 = form.getValue("resp1");
	var resp2 = form.getValue("resp2");
	var sistema = form.getValue("sistema");
	var justificativa = form.getValue("justificativa");
	var aprovacaoSolicitacao = form.getValue("aprovacaoSolicitacao");
	var observacaoAprovacao = form.getValue("observacaoAprovacao");
	var liberado = form.getValue("liberado");
	var observacaoLiberacao = form.getValue("observacaoLiberacao");
	
	if ((atividade == 0) || (atividade == 1))
	{
		if ((tipousuario == "") || (tipousuario == null) || (tipousuario == undefined))
		{
			throw "Preencha o campo Tipo de usuário.";
		}
		if ((usuarionovo == "") || (usuarionovo == null) || (usuarionovo == undefined))
		{
			throw "Preencha o campo Identificação do usuário/login a ser criado.";
		}
		if ((resp1 == "") || (resp1 == null) || (resp1 == undefined))
		{
			throw "Preencha o campo Reponsável 1.";
		}
		if ((resp2 == "") || (resp2 == null) || (resp2 == undefined))
		{
			throw "Preencha o campo Reponsável 2.";
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
	}

}